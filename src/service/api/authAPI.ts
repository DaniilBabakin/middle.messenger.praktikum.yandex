import { HTTPTransport } from "core/CustomFetch"

export const authAPI = {
  //TODO: тип даты
  signIn: async (data: any): Promise<boolean> => {
    const res: any = await HTTPTransport.getInstance().post("/auth/signin", {
      includeCredentials: true,
      data: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    })

    if (res.status !== 200) {
      return false
    }
    return true
  },

  signUp: async (data: any): Promise<boolean> => {
    const res: any = await HTTPTransport.getInstance().post("/auth/signup", {
      includeCredentials: true,
      data: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    })

    if (res.status !== 200) {
      throw Error(JSON.parse(res.responseText).reason)
    }
    return true
  },

  logout: async () => {
    console.log('Logout successfully developed')
    const res:any = await HTTPTransport.getInstance().post("/auth/logout", {
      includeCredentials: true,
      headers: {
        accept: "application/json",
      },
    })
    if (res.status !== 200) {
      throw Error(JSON.parse(res.responseText).reason)
    }
  },

  getUser: async () => {
    console.log("я в гет юзер")
    const res: any = await HTTPTransport.getInstance().get("/auth/user", {
      includeCredentials: true,
      headers: {
        accept: "application/json",
      },
    })
    console.log(JSON.parse(res.response))
    if (res.status !== 200) {
      throw Error(JSON.parse(res.responseText).reason)
    }
    return JSON.parse(res.response)
  },
}
