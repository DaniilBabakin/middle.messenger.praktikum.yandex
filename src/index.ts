require("babel-core/register")

import { registerComponent } from "./core"
import "./app.scss"
import { Router } from "service/router/Router"
import { ROUTES } from "./constants/routes"

//PAGES
import LoginPage from "./pages/login"
import SignUpPage from "./pages/signUp"
import ProfilePage from "./pages/profile"
import MainPage from "pages/main"
import NotFoundPage from "pages/notFound"
import ProfileSettingsPage from "pages/profileChangeValues"
import ProfileChangePasswordPage from "pages/profileChangePassword"

//COMPONENTS
import Title from "./components/title/"
import Button from "./components/button"
import Input from "./components/input"
import ErrorComponent from "./components/error"
import ControlledInput from "./components/controlledInput"
//------ИМПОРТЫ ДЛЯ ЧАТА
import ChatContacts from "./components/chat/chatContacts"
import ContactSearchInput from "./components/chat/chatContacts/contactSearchInput"
import ContactLink from "./components/chat/chatContacts/contactLink"
import ChatFooter from "./components/chat/chatFooter"
import ChatHeader from "./components/chat/chatHeader"
import ChatMainBlock from "./components/chat/chatMainBlock"
import ChatMessages from "./components/chat/chatMessages"

registerComponent(Title)
registerComponent(Button)
registerComponent(Input)
registerComponent(ErrorComponent)
registerComponent(ControlledInput)
//------РЕГИСТРЫ ДЛЯ ЧАТА
registerComponent(ChatContacts)
registerComponent(ContactSearchInput)
registerComponent(ContactLink)
registerComponent(ChatFooter)
registerComponent(ChatHeader)
registerComponent(ChatMainBlock)
registerComponent(ChatMessages)

export const router = new Router(".app")

document.addEventListener("DOMContentLoaded", () => {
  router
    .use(ROUTES.Login, LoginPage)
    .use(ROUTES.SignUp, SignUpPage)
    .use(ROUTES.Profile, ProfilePage)
    .use(ROUTES.ProfileSettings, ProfileSettingsPage)
    .use(ROUTES.ChangePassword, ProfileChangePasswordPage)
    .use(ROUTES.Chat, MainPage)
    .use(ROUTES.NotFound, NotFoundPage)
    .start()
})
