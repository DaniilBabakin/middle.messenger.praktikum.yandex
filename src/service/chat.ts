import { authAPI } from "api/authAPI"
import { UserDTO } from "api/types"
import { ROUTES } from "constants/routes"
import type { Dispatch } from "core"
import { transformUser, apiHasError } from "helpers"

type LoginPayload = {
  login: string
  password: string
}

export const getToken = async (dispatch: Dispatch<AppState>, state: AppState, action: LoginPayload): Promise<string> => {
    const res = await HTTPTransport.getInstance().post(
        `/chats/token/${chatId}`,
        {
            includeCredentials: true,
            headers: {
                'accept': 'application/json',
            }
        }
    );
    if (res.status !== 200) {
        throw Error(JSON.parse(res.responseText).reason);
    }
    return JSON.parse(res.responseText).token
}

export const signUp = async (dispatch: Dispatch<AppState>, state: AppState, action: LoginPayload) => {
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
