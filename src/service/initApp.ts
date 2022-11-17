import { authAPI } from "api/authAPI"
import { UserDTO } from "api/types"
import type { Dispatch } from "core/Store"
import { transformUser, apiHasError } from "helpers"
import { getChats } from "./chat"

export async function initApp(dispatch: Dispatch<AppState>) {
  // Ручкая задержка для демонстрации загрузочного экрана
  await new Promise((r) => setTimeout(r, 100))

  try {
    const response = await authAPI.getUser()

    dispatch(getChats)
    if (apiHasError(response)) {
      return
    }

    dispatch({ user: transformUser(response as UserDTO) })
  } catch (err) {
    console.error("ОШИБКА", err)
  } finally {
    dispatch({ appIsInited: true })
  }
}
