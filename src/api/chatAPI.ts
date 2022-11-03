import { baseAcceptHeaders } from "core"
import { baseContentTypeHeaders } from "core/BaseAPI"
import { HTTPTransport } from "core/CustomFetch"
import { checkResponse } from "helpers"

const chatsApiInstance = new HTTPTransport("https://ya-praktikum.tech/api/v2")

export const chatsAPI = {
  getChats: async () => {
    const res: XMLHttpRequest = await chatsApiInstance.get("/chats", {
      includeCredentials: true,
      headers: baseAcceptHeaders,
    })
    return checkResponse(res)
  },

  getChatByTitle: async (title: string) => {
    const res: XMLHttpRequest = await chatsApiInstance.get(`/chats?title=${title}`, {
      includeCredentials: true,
      headers: baseAcceptHeaders,
    })
    return checkResponse(res)
  },

  getChatUsers: async (chatId: number) => {
    const res: XMLHttpRequest = await chatsApiInstance.get(`/chats/${chatId}/users`, {
      includeCredentials: true,
      headers: baseAcceptHeaders,
    })
    return checkResponse(res)
  },

  createChat: async (data: { title: string }) => {
    const res: XMLHttpRequest = await chatsApiInstance.post("/chats", {
      includeCredentials: true,
      headers: {
        ...baseAcceptHeaders,
        "content-type": "application/json",
      },
      data: JSON.stringify(data),
    })
    console.log(res)
    return checkResponse(res)
  },

  deleteChat: async (chatId: number) => {
    const res: XMLHttpRequest = await chatsApiInstance.delete("/chats", {
      includeCredentials: true,
      headers: {
        ...baseAcceptHeaders,
        "content-type": "application/json",
      },
      data: JSON.stringify({ chatId: chatId }),
    })
    console.log(res)
    if (res.status !== 200) {
      throw Error(JSON.parse(res.responseText).reason)
    }
    return true
  },

  addUserToChat: async (userId: number, chatId: number) => {
    console.log()
    const res: XMLHttpRequest = await chatsApiInstance.put("/chats/users", {
      includeCredentials: true,
      headers: { ...baseAcceptHeaders, ...baseContentTypeHeaders },
      data: JSON.stringify({
        users: [userId],
        chatId: chatId,
      }),
    })
    console.log("RES OF ADD USER TO CHAT", res)
    return checkResponse(res)
  },

  getToken: async (chatId: number) => {
    const res: XMLHttpRequest = await chatsApiInstance.post(`/chats/token/${chatId}`, {
      includeCredentials: true,
      headers: baseAcceptHeaders,
    })
    if (res.status !== 200) {
      throw Error(JSON.parse(res.responseText).reason)
    }
    return JSON.parse(res.responseText)
  },

  changeAvatar: async (data: FormData) => {
    const res: XMLHttpRequest = await chatsApiInstance.put("/chats/avatar", {
      includeCredentials: true,
      data: data,
    })
    console.log(data, res)
    return JSON.parse(res.responseText)
  },
}
