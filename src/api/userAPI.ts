import { HTTPTransport } from "core/CustomFetch"

export const userAPI = {
  //TODO: тип даты
  changeValues: async (data: any): Promise<boolean> => {
    const res: any = await HTTPTransport.getInstance().put("/user/profile", {
      includeCredentials: true,
      data: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    })

    if (res.status !== 200) {
      return JSON.parse(res.responseText)
    }
    return true
  },

  changePassword: async (data: any): Promise<boolean> => {
    const res: any = await HTTPTransport.getInstance().put("/user/password", {
      includeCredentials: true,
      data: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    })
    console.log("RESPONSE", res)
    if (res.status !== 200) {
      return JSON.parse(res.responseText)
    }
    return true
  },

  changeAvatar: async (data: any): Promise<boolean> => {
    const res: any = await HTTPTransport.getInstance().put("/user/profile/avatar", {
      includeCredentials: true,
      data: data,
    })
    console.log(data, res)
    return true
  },

  usersSearch: async (data: any) => {
    const res: any = await HTTPTransport.getInstance().post("/user/search", {
      includeCredentials: true,
      data: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    })
    console.log("RESPONSE", res)
    return JSON.parse(res.responseText)
  },
}
