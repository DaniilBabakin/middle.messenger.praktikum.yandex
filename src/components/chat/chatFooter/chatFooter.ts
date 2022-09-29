import Block from "core/Block"
import { validateForm } from "helpers/validateForm"

import "./chatFooter.scss"

export class ChatFooter extends Block {
  constructor() {
    super()

    this.setProps({
      error: "",
      messageValue: "",
      onInput: (e: FocusEvent) => {
        const inputEl = e.target as HTMLInputElement
        const inputRef = inputEl.name + "InputRef" //Чтобы найти нужный объект в this.refs. Получается, например loginInputRef
        const errorRef = inputEl.name + "ErrorRef" //Чтобы найти нужный объект в this.refs[inputRef] Получается, например loginErrorRef

        const errorMessage = validateForm([{ type: inputEl.name, value: inputEl.value }]) //Две константы выше сделаны как раз для того, чтобы не нужно было через условия отслеживать, какой тип отправлять. Результат функции - {text:сообщение об ошибке, inputName:имя элемента}

        this.refs[inputRef].refs[errorRef].setProps({
          text: errorMessage.text,
        })
      },
      onSubmit: () => {
        const messageEl = this.element?.querySelector("input[name='message']") as HTMLInputElement

        const errorMessage = validateForm([
          { type: "message", value: messageEl.value },
        ])

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