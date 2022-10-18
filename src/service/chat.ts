import { chatsAPI } from "api/chatAPI"
import type { Dispatch } from "core"
import WebSocketTransport from "./webSocket"

export const getChats = async (dispatch: Dispatch<AppState>) => {
  const res = await chatsAPI.getChats()
  if (res) {
    dispatch({ chats: res })
  }
  console.log("CHATS", res)
}

export const createWebSocketsConnection = async (user: User | null, chatId: number) => {
  const token = await chatsAPI.getToken(chatId)
  return new WebSocketTransport(user, chatId, token)
}

