import { authAPI } from "api/authAPI"
import { UserDTO } from "api/types"
import { userAPI } from "api/userAPI"
import { ROUTES } from "constants/routes"
import { apiHasError, transformUser } from "helpers"

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

export const changeValues: DispatchStateHandler<ChangeValuesPayload> = async (dispatch, state, action) => {
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

export const changePassword: DispatchStateHandler<ChangePasswordPayload> = async (dispatch, state, action) => {
  dispatch({ isLoading: true })

  const response = await userAPI.changePassword(action)

  if (apiHasError(response)) {
    dispatch({ isLoading: false, formError: response.reason })
    return
  }

  dispatch({ isLoading: false, formError: null })

  window.router.go(ROUTES.Profile)
}

export const changeAvatar: DispatchStateHandler<ChangeAvatarPayload> = async (dispatch, state, action) => {
  dispatch({ isLoading: true })

  const response = await userAPI.changeAvatar(action)

  if (apiHasError(response)) {
    dispatch({ isLoading: false, formError: response.reason })
    return
  }

  dispatch({ isLoading: false, formError: null })
}

export const searchUsers: DispatchStateHandler<{ login: string }> = async (dispatch, state, action) => {
  const response = await userAPI.usersSearch(action)
  console.log("RES", response)
  dispatch({ chats: response.map((item: UserDTO) => transformUser({ ...item, fromSearch: true })) })
}
