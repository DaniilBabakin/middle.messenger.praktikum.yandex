import Block from "core/Block"
import "./main.scss"
import { LoginPage } from "../login/login"
import { validateForm, ValidateType } from "helpers/validateForm"
export class MainPage extends Block {
  constructor() {
    super()
  }
  render() {
    // language=hbs
    return `
        <main class="main">
            {{{ChatContacts}}}
            {{{ChatMessages}}}
        </main>
    `
  }
}
