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
      throw Error(JSON.parse(res.responseText).reason)
    }
    return JSON.parse(res.response)
  },

  changePassword: async (data: any): Promise<boolean> => {
    const res: any = await HTTPTransport.getInstance().put("/user/password", {
      includeCredentials: true,
      data: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    })
    console.log(res)
    if (res.status !== 200) {
      return false
    }
    return true
  },
}
