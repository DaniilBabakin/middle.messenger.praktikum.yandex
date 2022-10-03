import Block from "core/Block"
import { validateForm } from "helpers/validateForm"

import "./chatFooter.scss"

export class ChatFooter extends Block {
  static componentName = "ChatFooter"
  constructor() {
    super()

    this.setProps({
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
