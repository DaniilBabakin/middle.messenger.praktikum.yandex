require("babel-core/register")

import { CoreRouter, PathRouter, registerComponent } from "./core"
import "./app.scss"
import { initRouter } from "service/router/Router"
import Handlebars from "handlebars"

//COMPONENTS
import Title from "./components/title/"
import Button from "./components/button"
import Input from "./components/input"
import ErrorComponent from "./components/error"
import ControlledInput from "./components/controlledInput"
import ChangeAvatar from "./components/changeAvatar"
import ErrorFromServer from "./components/errorFromServer"

//------ИМПОРТЫ ДЛЯ ЧАТА
import ChatContacts from "./components/chat/chatContacts"
import ContactSearchInput, { ContactSearchResults } from "./components/chat/chatContacts/contactSearchInput"
import ContactLink from "./components/chat/chatContacts/contactLink"
import ChatFooter from "./components/chat/chatFooter"
import ChatHeader from "./components/chat/chatHeader"
import ChatMainBlock from "./components/chat/chatMainBlock"
import ChatMessages from "./components/chat/chatMessages"
import { Store } from "./core/Store"
import { defaultState } from "./store"
import { initApp } from "service/initApp"
import ChatItem from "components/chat/chatContacts/chatItem"
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

export const router = new PathRouter()

declare global {
  interface Window {
    store: Store<AppState>
    router: CoreRouter
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const router = new PathRouter()
  const store = new Store<AppState>(defaultState)

  window.router = router
  window.store = store

  initRouter(router, store)
  //TODO: убрать store.on
  store.on("changed", (prevState, nextState) => {
    console.log("%cstore updated", "background: #222; color: #bada55", nextState)
  })
  store.dispatch(initApp)
})
