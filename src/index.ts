require("babel-core/register")

import { renderDOM, registerComponent } from "./core"
import "./app.scss"

import { LoginPage } from "./pages/login/login"
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
import signUp from "pages/signUp"
import profileChangeValues from "pages/profileChangeValues"
// import Layout from "./components/layout";

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

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new profileChangeValues())
})

window.currentPage = new Proxy(
  { page: "login" },
  {
    get(target: any, prop) {
      const value = target[prop]
      console.log("get data: ", value)
      return typeof value === "function" ? value.bind(target) : value
    },
    set(target, prop, value) {
      target[prop] = value
      console.log(value)
      renderDOM(new target[prop]())
      return true
    },
  },
)
