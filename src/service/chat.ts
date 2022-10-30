import { chatsAPI } from "api/chatAPI"
import type { Dispatch } from "core"
import { ChatType } from "types/Chat"

export const getChats = async (dispatch: Dispatch<AppState>) => {
  const res = await chatsAPI.getChats()
  if (res) {
    dispatch({ chats: res })
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
