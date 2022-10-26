import { baseHeaders } from "core"
import { HTTPTransport } from "core/CustomFetch"
import { checkResponse } from "helpers"

type ChangeAvatarPayload = {
  photo: File
}

const chatsApiInstance = new HTTPTransport("https://ya-praktikum.tech/api/v2")

export const chatsAPI = {
  getChats: async () => {
    const res: XMLHttpRequest = await chatsApiInstance.get("/chats", {
      includeCredentials: true,
      headers: baseHeaders,
    })
    return checkResponse(res)
  },

  getChatByTitle: async (title: string) => {
    const res: XMLHttpRequest = await chatsApiInstance.get(`/chats?title=${title}`, {
      includeCredentials: true,
      headers: baseHeaders,
    })
    return checkResponse(res)
  },

  getChatUsers: async (chatId: number) => {
    const res: XMLHttpRequest = await chatsApiInstance.get(`/chats/${chatId}/users`, {
      includeCredentials: true,
      headers: baseHeaders,
    })
    return checkResponse(res)
  },

  createChat: async (data: { title: string }) => {
    const res: XMLHttpRequest = await chatsApiInstance.post("/chats", {
      includeCredentials: true,
      headers: {
        ...baseHeaders,
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
        ...baseHeaders,
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
    const res: XMLHttpRequest = await chatsApiInstance.put("/chats/users", {
      includeCredentials: true,
      headers: baseHeaders,
      data: JSON.stringify({
        users: [userId],
        chatId: chatId,
      }),
    })
    return checkResponse(res)
  },

  getToken: async (chatId: number) => {
    const res: XMLHttpRequest = await chatsApiInstance.post(`/chats/token/${chatId}`, {
      includeCredentials: true,
      headers: baseHeaders,
    })
    return checkResponse(res)
  },

  changeAvatar: async (data: ChangeAvatarPayload) => {
    const res: XMLHttpRequest = await chatsApiInstance.put("/chats/avatar", {
      includeCredentials: true,
      data: data,
    })
    console.log(data, res)
    return JSON.parse(res.responseText)
  },
}
