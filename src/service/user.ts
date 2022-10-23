import { authAPI } from "api/authAPI"
import { UserDTO } from "api/types"
import { userAPI } from "api/userAPI"
import { ROUTES } from "constants/routes"
import { Dispatch } from "core"
import { HTTPTransport } from "core/CustomFetch"
import { apiHasError, transformUser } from "helpers"
import { logout } from "./auth"

export const userAPIjhljk = {
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

  changeAvatar: async (data: any): Promise<boolean> => {
    const res: any = await HTTPTransport.getInstance().put("/user/profile/avatar", {
      includeCredentials: true,
      data: data,
    })
    console.log(data, res)
    return true
  },
}

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
type ChangeAvatarPayload = {
  photo: File
}

export const changeValues = async (dispatch: Dispatch<AppState>, state: AppState, action: ChangeValuesPayload) => {
  dispatch({ isLoading: true })

  const response = await userAPI.changeValues(action)

  if (apiHasError(response)) {
    dispatch({ isLoading: false, formError: response.reason })
    return
  }

  const responseUser = await authAPI.getUser()

  dispatch({ isLoading: false, formError: null })
  dispatch({ user: transformUser(responseUser as UserDTO) })

  window.router.go(ROUTES.Profile)
}

export const changePassword = async (dispatch: Dispatch<AppState>, state: AppState, action: ChangePasswordPayload) => {
  dispatch({ isLoading: true })

  const response = await userAPI.changePassword(action)

  if (apiHasError(response)) {
    dispatch({ isLoading: false, formError: response.reason })
    return
  }

  dispatch({ isLoading: false, formError: null })

  window.router.go(ROUTES.Profile)
}

export const changeAvatar = async (dispatch: Dispatch<AppState>, state: AppState, action: ChangeAvatarPayload) => {
  dispatch({ isLoading: true })

  const response = await userAPI.changeAvatar(action)

  if (apiHasError(response)) {
    dispatch({ isLoading: false, formError: response.reason })
    return
  }

  dispatch({ isLoading: false, formError: null })
}

export const searchUsers = async (dispatch: Dispatch<AppState>, state: AppState, action: ChangeAvatarPayload) => {
  const response = await userAPI.usersSearch(action)
  console.log("RES", response)
  dispatch({ chats: response.map((item: UserDTO) => transformUser({ ...item, fromSearch: true })) })
}
