require("babel-core/register")

import { registerComponent } from "./core"
import "./app.scss"
import { Router } from "service/router/Router"
import { ROUTES } from "./constants/routes"
import Handlebars from "handlebars"

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
import ChangeAvatar from "./components/changeAvatar"
import ErrorFromServer from "components/errorFromServer"

//------ИМПОРТЫ ДЛЯ ЧАТА
import ChatContacts from "./components/chat/chatContacts"
import ContactSearchInput, { ContactSearchResults } from "./components/chat/chatContacts/contactSearchInput"
import ContactLink from "./components/chat/chatContacts/contactLink"
import ChatFooter from "./components/chat/chatFooter"
import ChatHeader from "./components/chat/chatHeader"
import ChatMainBlock from "./components/chat/chatMainBlock"
import ChatMessages from "./components/chat/chatMessages"
import { Store } from "core/Store"
import { defaultState } from "./store"
import { initApp } from "service/initApp"
import ChatItem from "components/chat/chatContacts/ChatItem"
import { ChatHeaderOptions } from "components/chat/chatHeader/chatOptions"
import * as modals from "components/modals"
import Loader from "components/loader"
import ContactsList from "components/chat/chatContacts/contactsList"

registerComponent(Title)
registerComponent(Button)
registerComponent(Input)
registerComponent(ErrorComponent)
registerComponent(ErrorFromServer)
registerComponent(ControlledInput)
registerComponent(ChangeAvatar)
registerComponent(Loader)
modals.default.forEach((component) => registerComponent(component))
//------РЕГИСТРЫ ДЛЯ ЧАТА
registerComponent(ChatContacts)
registerComponent(ContactSearchInput)
registerComponent(ContactSearchResults)
registerComponent(ChangeAvatar)
registerComponent(ContactLink)
registerComponent(ChatItem)
registerComponent(ChatFooter)
registerComponent(ChatHeaderOptions)
registerComponent(ChatHeader)
registerComponent(ChatMainBlock)
registerComponent(ContactsList)
registerComponent(ChatMessages)

Handlebars.registerHelper("ifNotMyMessage", function (arg1, options) {
  return arg1 !== window.store.getState()?.user?.id ? "friend__message" : ""
})

export const router = new Router(".app")

declare global {
  interface Window {
    store: Store<AppState>
    router: Router
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const router = new Router(".app")
  const store = new Store<AppState>(defaultState)

  window.router = router
  window.store = store
  router
    .use(ROUTES.Login, LoginPage)
    .use(ROUTES.SignUp, SignUpPage)
    .use(ROUTES.Profile, ProfilePage)
    .use(ROUTES.ProfileSettings, ProfileSettingsPage)
    .use(ROUTES.ChangePassword, ProfileChangePasswordPage)
    .use(ROUTES.Chat, MainPage)
    .use(ROUTES.NotFound, NotFoundPage)
    .start()
  //TODO: убрать store.on
  store.on("changed", (prevState, nextState) => {
    console.log("%cstore updated", "background: #222; color: #bada55", nextState)
  })
  store.dispatch(initApp)
})
