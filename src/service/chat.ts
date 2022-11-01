import { chatsAPI } from "api/chatAPI"
import type { Dispatch } from "core"
import { ChatType } from "types/Chat"
import WebSocketTransport from "./webSocket"

const webSocketUrl: string = "wss://ya-praktikum.tech/ws"
function serveWSIncomingMessages(messagesList: any, chatId: number) {
  console.log(messagesList, this)
  console.log(
    "NEW CHATS",
    window.store.getState()?.chats?.map((item) => {
      return this.id === messagesList.id ? { ...item, unread_count: 1, last_message: messagesList } : item
    }),
  )
  //   window.store.dispatch({
  //     chats: window.store.getState()?.chats?.map((item) => {
  //       return item.id === messagesList[0].id
  //         ? { ...item, unread_count: 1, lastMessage: messagesList[messagesList.length - 1] }
  //         : item
  //     }),
  //   })
  //   if (Array.isArray(messagesList)) {
  //     messagesList = messagesList
  //       .map((message: ChatMessageType, index) => {
  //         return transformDate(message, messagesList, index)
  //       })
  //       .reverse()
  //   } else {
  //     messagesList = transformDate(messagesList, this.props.chatMessages, this.props.chatMessages.length - 2)
  //   }
  //   this.setProps({ ...this.props, chatMessages: this.props.chatMessages.concat(messagesList), isLoading: false })
}

export const getChats = async (dispatch: Dispatch<AppState>) => {
  const res = await chatsAPI.getChats()
  if (res) {
    dispatch({ chats: res })
    res.forEach((item: ChatType) => {
      chatsAPI.getToken(item.id).then((res) => {
        item.socket = new WebSocketTransport(webSocketUrl, window.store.getState().user, item.id, res.token)
        item.socket.eventBus.on(WebSocketTransport.EVENTS.WS_MESSAGES_ARRIVED, serveWSIncomingMessages.bind(item))
        item.socket.start()
      })
    })
  }
  console.log("CHATS", res)
}

export const getChatByTitle = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  action: { id: number; avatar: string; title: string },
) => {
  const resultOfGetChat = await chatsAPI.getChatByTitle(action.title)
  if (resultOfGetChat.length > 0) {
    chatsAPI.getToken(resultOfGetChat[0].id).then((res) => {
      console.log("CURRENT CHAT", { currentChat: { ...resultOfGetChat[0], avatar: action.avatar, token: res.token } })
      dispatch({ currentChat: { ...resultOfGetChat[0], avatar: action.avatar, token: res.token } })
      //   window.store.dispatch(getChats)
    })
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

export const deleteChat: DispatchStateHandler<number> = async (dispatch, state, chatId) => {
  const res = await chatsAPI.deleteChat(chatId)
  if (res) {
    window.store.dispatch({
      chats: window.store.getState().chats?.filter((chat: ChatType) => chat.id !== chatId),
      currentChat: undefined,
    })
  }
}

export const changeChatAvatar: DispatchStateHandler<{ photo: File }> = async (dispatch, state, action) => {
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
