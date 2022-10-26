import { ROUTES } from "constants/routes"
import { HTTPTransport } from "core/CustomFetch"

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
const JSONHeaders = { "content-type": "application/json" }
const authApiInstance = new HTTPTransport("https://ya-praktikum.tech/api/v2/auth")

export const authAPI = {
  signIn: async (data: LoginData) => {
    const res: XMLHttpRequest = await authApiInstance.post("/signin", {
      includeCredentials: true,
      data: JSON.stringify(data),
      headers: JSONHeaders,
    })
    if (res.status !== 200) {
      return JSON.parse(res.responseText)
    }
    return res
  },

  signUp: async (data: SignUpData): Promise<boolean> => {
    const res: XMLHttpRequest = await authApiInstance.post("/signup", {
      includeCredentials: true,
      data: JSON.stringify(data),
      headers: JSONHeaders,
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
      headers: {
        accept: "application/json",
      },
    })
    console.log(res)
    if (res.status !== 200) {
      throw Error(JSON.parse(res.responseText).reason)
    }
    window.store.dispatch({ user: null, chats: null, })
    window.router.go(ROUTES.Login)
  },

  getUser: async () => {
    const res: XMLHttpRequest = await authApiInstance.get("/user", {
      includeCredentials: true,
      headers: {
        accept: "application/json",
      },
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
