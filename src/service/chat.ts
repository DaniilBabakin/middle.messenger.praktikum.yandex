import { chatsAPI } from "api/chatAPI"
import type { Dispatch } from "core"
import { ChatType } from "types/Chat"
import WebSocketTransport from "./webSocket"

type MessageFromSocket = {
  content: string
  id: string
  time: string
  type: string
  user_id: number
}

const webSocketUrl: string = "wss://ya-praktikum.tech/ws"
function serveWSIncomingMessages(chat: ChatType, message: MessageFromSocket) {
  console.log("THIS", chat, message)

  if (!Array.isArray(message)) {
    window.store.dispatch({
      chats: window.store.getState()?.chats?.map((item: ChatType) => {
        return item.id === chat.id
          ? {
              ...item,
              unread_count: item.unread_count + 1,
              last_message: {
                ...message,
                user: item.users?.find((user) => user.id === message.user_id),
              },
            }
          : item
      }),
    })
  }
}

export const getChats = async (dispatch: Dispatch<AppState>) => {
  const res = await chatsAPI.getChats()
  if (res) {
    const resWithUsers = await Promise.all(
      res.map(async (item: ChatType) => {
        const users = await chatsAPI.getChatUsers(item.id)
        return { ...item, users: users }
      }),
    )
    console.log("CHAT USERS", resWithUsers)
    dispatch({ chats: resWithUsers })
    res.forEach((item: ChatType) => {
      chatsAPI
        .getToken(item.id)
        .then((res) => {
          item.socket = new WebSocketTransport(webSocketUrl, window.store.getState().user, item.id, res.token)
          item.socket.eventBus.on(
            WebSocketTransport.EVENTS.WS_MESSAGES_ARRIVED,
            serveWSIncomingMessages.bind(item, item),
          )
          item.socket.start()
        })
        .catch((e) => console.log(e))
    })
  }
  console.log("CHATS", res)
}

export const getChatByTitle = async (
  dispatch: Dispatch<AppState>,
  _: AppState,
  action: { id: number; avatar: string; title: string },
) => {
  const resultOfGetChat = await chatsAPI.getChatByTitle(action.title)
  if (resultOfGetChat.length > 0) {
    chatsAPI
      .getToken(resultOfGetChat[0].id)
      .then((res) => {
        console.log("CURRENT CHAT", { currentChat: { ...resultOfGetChat[0], avatar: action.avatar, token: res.token } })
        dispatch({ currentChat: { ...resultOfGetChat[0], avatar: action.avatar, token: res.token } })
        //   window.store.dispatch(getChats)
      })
      .catch((e) => console.log(e))
  } else {
    async function createChat() {
      const resOfCreation = await chatsAPI.createChat({ title: action.title })
      if (resOfCreation) {
        await chatsAPI.addUserToChat(action.id, resOfCreation.id)
        window.store.dispatch(getChatByTitle, action)
      }
      return true
    }
    createChat()
  }
}

export const deleteChat: DispatchStateHandler<number> = async (__, _, chatId) => {
  const res = await chatsAPI.deleteChat(chatId)
  if (res) {
    window.store.dispatch({
      chats: window.store.getState().chats?.filter((chat: ChatType) => chat.id !== chatId),
      currentChat: undefined,
    })
  }
}

export const changeChatAvatar: DispatchStateHandler<FormData> = async (dispatch, _, action) => {
  console.log("DATA", action)
  const res = await chatsAPI.changeAvatar(action)
  console.log("res", res)
  if (res) {
    console.log("NEW OBJECT", { ...window.store.getState().currentChat, avatar: res.avatar })
    dispatch({
      currentChat: { ...window.store.getState().currentChat, avatar: res.avatar },
      chats: window.store.getState().chats?.map((chat: ChatType) => {
        if (chat.id === res.id) {
          return { ...chat, avatar: res.avatar }
        } else {
          return chat
        }
      }),
    })
  }
}
