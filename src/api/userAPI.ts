import { baseHeaders } from "core"
import { HTTPTransport } from "core/CustomFetch"

type ChangeValuesPayload = {
  email: string
  login: string
  first_name: string
  second_name: string
  phone: string
  display_name: string
}
type ChangePasswordPayload = {
  oldPassword: string
  newPassword: string
}
const userApiInstance = new HTTPTransport("https://ya-praktikum.tech/api/v2/user")

export const userAPI = {
  changeValues: async (data: ChangeValuesPayload): Promise<boolean> => {
    const res: XMLHttpRequest = await userApiInstance.put("/profile", {
      includeCredentials: true,
      data: JSON.stringify(data),
      headers: baseHeaders,
    })

    if (res.status !== 200) {
      return JSON.parse(res.responseText)
    }
    return true
  },

  changePassword: async (data: ChangePasswordPayload): Promise<boolean> => {
    const res: XMLHttpRequest = await userApiInstance.put("/password", {
      includeCredentials: true,
      data: JSON.stringify(data),
      headers: baseHeaders,
    })
    console.log("RESPONSE", res)
    if (res.status !== 200) {
      return JSON.parse(res.responseText)
    }
    return true
  },

  changeAvatar: async (data: FormData): Promise<boolean> => {
    const res: XMLHttpRequest = await userApiInstance.put("/profile/avatar", {
      includeCredentials: true,
      data: data,
    })
    console.log(data, res)
    return true
  },

  usersSearch: async (data: { login: string }) => {
    const res: XMLHttpRequest = await userApiInstance.post("/search", {
      includeCredentials: true,
      data: JSON.stringify(data),
      headers: baseHeaders,
    })
    console.log("RESPONSE", res)
    return JSON.parse(res.responseText)
  },
}
