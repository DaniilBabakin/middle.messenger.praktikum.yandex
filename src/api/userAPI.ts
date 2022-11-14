import { baseContentTypeHeaders } from "core/BaseAPI"
import { HTTPTransport } from "core/CustomFetch"
import { BASE_URL } from "constants/defaults"

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
const userApiInstance = new HTTPTransport(`${BASE_URL}/user`)

export const userAPI = {
  changeValues: async (data: ChangeValuesPayload): Promise<boolean> => {
    const res: XMLHttpRequest = await userApiInstance.put("/profile", {
      includeCredentials: true,
      data: JSON.stringify(data),
      headers: baseContentTypeHeaders,
    })

    if (res.status !== 200) {
      try {
        return JSON.parse(res.responseText)
      } catch (e) {
        throw e
      }
    }
    return true
  },

  changePassword: async (data: ChangePasswordPayload): Promise<boolean> => {
    const res: XMLHttpRequest = await userApiInstance.put("/password", {
      includeCredentials: true,
      data: JSON.stringify(data),
      headers: baseContentTypeHeaders,
    })
    console.log("RESPONSE", res)
    if (res.status !== 200) {
      try {
        return JSON.parse(res.responseText)
      } catch (e) {
        throw e
      }
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
      headers: baseContentTypeHeaders,
    })
    console.log("RESPONSE", res)
    try {
      return JSON.parse(res.responseText)
    } catch (e) {
      throw e
    }
  },
}
