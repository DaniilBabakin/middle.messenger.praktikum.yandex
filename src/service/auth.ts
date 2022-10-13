import { authAPI } from "api/authAPI"
import { UserDTO } from "api/types"
import { ROUTES } from "constants/routes"
import type { Dispatch } from "core"
import { transformUser, apiHasError } from "helpers"

type LoginPayload = {
  login: string
  password: string
}

export const login = async (dispatch: Dispatch<AppState>, state: AppState, action: LoginPayload) => {
  dispatch({ isLoading: true })
  const response = await authAPI.signIn(action)

  if (apiHasError(response)) {
    dispatch({ isLoading: false, formError: response.reason })
    return
  }

  const responseUser = await authAPI.getUser()

  dispatch({ isLoading: false, formError: null })

  if (apiHasError(response)) {
    dispatch(logout)
    return
  }

  dispatch({ user: transformUser(responseUser as UserDTO) })

  window.router.go(ROUTES.Chat)
}

export const logout = async (dispatch: Dispatch<AppState>) => {
  dispatch({ isLoading: true })

  await authAPI.logout()

  dispatch({ isLoading: false, user: null })

  window.router.go(ROUTES.Login)
}
