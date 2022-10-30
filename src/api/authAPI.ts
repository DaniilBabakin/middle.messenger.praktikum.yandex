import { ROUTES } from "constants/routes"
import { baseAcceptHeaders } from "core"
import { HTTPTransport } from "core/CustomFetch"
import { checkResponse } from "helpers"

type LoginData = {
  login: string
  password: string
}

type SignUpData = {
  emailValue: string
  loginValue: string
  firstNameValue: string
  secondNameValue: string
  phoneValue: string
  passwordValue: string
  avatar: string
}

const authApiInstance = new HTTPTransport("https://ya-praktikum.tech/api/v2/auth")

export const authAPI = {
  signIn: async (data: LoginData) => {
    console.log("DATA", data)
    const res: XMLHttpRequest = await authApiInstance.post("/signin", {
      includeCredentials: true,
      data: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    })
    console.log(res)
    return checkResponse(res)
  },

  signUp: async (data: SignUpData): Promise<boolean> => {
    const res: XMLHttpRequest = await authApiInstance.post("/signup", {
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
    console.log("Logout successfully developed")
    const res: XMLHttpRequest = await authApiInstance.post("/logout", {
      includeCredentials: true,
      headers: baseAcceptHeaders,
    })
    console.log(res)
    window.store.dispatch({ user: null, chats: null })
    window.router.go(ROUTES.Login)
    return checkResponse(res)
  },

  getUser: async () => {
    const res: XMLHttpRequest = await authApiInstance.get("/user", {
      includeCredentials: true,
      headers: baseAcceptHeaders,
    })
    //TODO: тест вариант
    if (res.status !== 200) {
      if (window.location.pathname !== ROUTES.SignUp && window.location.pathname !== ROUTES.Login) {
        window.router.go(ROUTES.Login)
      }
      throw Error(JSON.parse(res.responseText).reason)
    }
    return JSON.parse(res.response)
  },
}
