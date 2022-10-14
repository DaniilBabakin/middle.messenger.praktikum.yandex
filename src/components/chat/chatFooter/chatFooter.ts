import Block from "core/Block"
import { withUser } from "helpers"
import { validateForm } from "helpers/validateForm"
import { searchUsers } from "service/user"
import WebSocketTransport from "service/webSocket"

import "./chatFooter.scss"

type ChatFooterProps = {
  user: User | null
  error: string
  messageValue: string
  onInput?: (e: FocusEvent) => void
  onSubmit?: () => void
}

class ChatFooter extends Block<ChatFooterProps> {
  static componentName = "ChatFooter"
  private _socketTransport?: WebSocketTransport
  constructor(props: ChatFooterProps) {
    super(props)
    this._socketTransport = new WebSocketTransport(this.props.user, 150, "edf32442e332ef9209791ee88a52735182107d6d:1665741478")
    this.setProps({
      ...props,
      error: "",
      messageValue: "",
      onInput: (e: FocusEvent) => {
        const inputEl = e.target as HTMLInputElement
        const inputRef = inputEl.name + "InputRef"
        const errorRef = inputEl.name + "ErrorRef"

        const errorMessage = validateForm([{ type: inputEl.name, value: inputEl.value }])

        window.store.dispatch(searchUsers, { login: inputEl.value })

        this.refs[inputRef].refs[errorRef].setProps({
          text: errorMessage.text,
        })
      },
      onSubmit: () => {
        const messageEl = this.element?.querySelector("input[name='message']") as HTMLInputElement

        const errorMessage = validateForm([{ type: "message", value: messageEl.value }])

        if (errorMessage.text) {
          this.refs[errorMessage.inputName].refs[errorMessage.inputName.replace("Input", "Error")].setProps({
            text: errorMessage.text,
          })
        } else {
          this.setProps({
            ...props,
            error: "",
            messageValue: messageEl.value,
          })
          console.log("Сообщение готово к отправке, данные: ", { Message: messageEl.value })
        }
      },
    })
  }
  protected render(): string {
    // language=hbs
    return `
        <footer class="messages__footer">
            <button class="messages__footer__import-files"></button>
            {{{ControlledInput 
                onInput=onInput 
                type="text" 
                name="message" 
                value=messageValue 
                placeholder="Сообщение" 
                inputClassName="messages__footer__input" 
                divClassName="message-input" 
                errorClassName="message-error"
                ref="messageInputRef" 
                errorRef="messageErrorRef" 
            }}}
            {{{Button className="messages__footer__send-message" onClick=onSubmit}}}
        </footer>
    `
  }
}

const ConnectedChatFooter = withUser(ChatFooter)
export { ConnectedChatFooter as ChatFooter }
