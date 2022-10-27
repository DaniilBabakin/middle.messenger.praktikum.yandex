import { authAPI } from "api/authAPI"
import { UserDTO } from "api/types"
import { ROUTES } from "constants/routes"
import type { Dispatch } from "core"
import { transformUser, apiHasError } from "helpers"

type LoginPayload = {
  login: string
  password: string
}

type SignUpPayload = {
  emailValue: string
  loginValue: string
  firstNameValue: string
  secondNameValue: string
  phoneValue: string
  passwordValue: string
  avatar: string
}

export const login: DispatchStateHandler<LoginPayload> = async (dispatch, state, action) => {
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

export const signUp: DispatchStateHandler<SignUpPayload> = async (dispatch, state, action) => {
  dispatch({ isLoading: true })
  const response = await authAPI.signUp(action)

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
