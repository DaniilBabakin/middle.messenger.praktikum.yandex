import { chatsAPI } from "api/chatAPI"
import type { Dispatch } from "core"
import { ChatType } from "types/Chat"
import WebSocketTransport from "./webSocket"

export const getChats = async (dispatch: Dispatch<AppState>) => {
  const res = await chatsAPI.getChats()
  if (res) {
    dispatch({ chats: res })
  }
  console.log("CHATS", res)
}
export const changeChatAvatar = async (dispatch: Dispatch<AppState>, state: AppState, action: {}) => {
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
export const createWebSocketsConnection = async (user: User | null, chatId: number) => {
  const token = await chatsAPI.getToken(chatId)
  return new WebSocketTransport(user, chatId, token)
}
