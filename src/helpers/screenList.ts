import LoginPage from "pages/login"
import SignUpPage from "pages/signUp"
import MainPage from "pages/main"
import NotFoundPage from "pages/notFound"
import ProfilePage from "pages/profile"
import ServerErrorPage from "pages/serverError"
import ProfileChangePasswordPage from "pages/profileChangePassword"
import ProfileChangeValuesPage from "pages/profileChangePassword"
import { BlockClass } from "core"

export enum Screens {
  Login = "login",
  Profile = "profile",
  SignUp = "signUp",
  Main = "main",
  NotFound = "notFound",
  ServerError = "serverError",
  ProfileChangePassword = "profileChangePassword",
  ProfileChangeValues = "profileChangePassword",
}

const map: Record<Screens, BlockClass<any>> = {
  [Screens.Login]: LoginPage,
  [Screens.Profile]: ProfilePage,
  [Screens.SignUp]: SignUpPage,
  [Screens.Main]: MainPage,
  [Screens.NotFound]: NotFoundPage,
  [Screens.ServerError]: ServerErrorPage,
  [Screens.ProfileChangePassword]: ProfileChangePasswordPage,
  [Screens.ProfileChangeValues]: ProfileChangeValuesPage
}

export const getScreenComponent = (screen: Screens): BlockClass<any> => {
  return map[screen]
}
