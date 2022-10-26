import Block from "core/Block"
import { validateForm } from "helpers/validateForm"
import WebSocketTransport from "service/webSocket"

import "./chatFooter.scss"

type ChatFooterProps = {
  user: Nullable<User>
  error: string
  messageValue: string
  onInput?: (e: FocusEvent) => void
  onSubmit: () => void
  onBlur: () => void
  events: Record<string, any>
  socket: WebSocketTransport
}

export class ChatFooter extends Block<ChatFooterProps> {
  static componentName = "ChatFooter"
  constructor(props: ChatFooterProps) {
    super({
      ...props,
      events: {
        submit: (e: Event) => {
          e.preventDefault()
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

            props.socket.send(messageEl.value)
            console.log("Сообщение готово к отправке, данные: ", { Message: messageEl.value })
          }
        },
      },
    })
    this.setProps({
      ...props,
      error: "",
      messageValue: "",
      onInput: (e: FocusEvent) => {
        const inputEl = e.target as HTMLInputElement
        const inputRef = inputEl.name + "InputRef"
        const errorRef = inputEl.name + "ErrorRef"

        const errorMessage = validateForm([{ type: inputEl.name, value: inputEl.value }])

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

          props.socket.send(messageEl.value)
          console.log("Сообщение готово к отправке, данные: ", { Message: messageEl.value })
        }
      },
    })
    this.element?.querySelector("input[name='message']")?.addEventListener("keypress", (event) => {
      let keyboardEvent = event as KeyboardEvent

      if (keyboardEvent.key === "Enter") {
        event.preventDefault()
        this.props.onSubmit()
      }
    })
  }
  componentDidMount() {
    const messageEl = this.element?.querySelector("input[name='message']") as HTMLInputElement
    messageEl.focus()
  }
  protected render(): string {
    // language=hbs
    return `
        <footer class="messages__footer">
            <button class="messages__footer__import-files"></button>
            <form class="messages__footer__form">
                {{{ControlledInput 
                    onInput=onInput 
                    type="text" 
                    name="message" 
                    value=messageValue 
                    autofocus=true
                    placeholder="Сообщение" 
                    inputClassName="messages__footer__input" 
                    divClassName="message-input" 
                    errorClassName="message-error"
                    ref="messageInputRef" 
                    errorRef="messageErrorRef" 
                }}}
                {{{Button type="submit "className="messages__footer__send-message"}}}
            </form>
        </footer>
    `
  }
}
