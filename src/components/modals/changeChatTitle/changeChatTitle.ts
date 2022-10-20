import Block from "core/Block"
import WebSocketTransport from "service/webSocket"
import { CurrentChatType } from "types/CurrentChat"

import "../modal.scss"

type ChangeChatTitleModalProps = {
  currentChat: CurrentChatType
  socket:WebSocketTransport
}

export class ChangeChatTitleModal extends Block {
  static componentName = "ChangeChatTitleModal"
  constructor(props: ChangeChatTitleModalProps) {
    super(props)
    this.setProps({
      ...props,
      messageValue: "",
      onInput: (e: FocusEvent) => {
        const inputEl = e.target as HTMLInputElement
        const inputRef = inputEl.name + "InputRef"
        const errorRef = inputEl.name + "ErrorRef"
      },
      onSubmit: (e:Event) => {
        e.preventDefault()
        const messageEl = this.element?.querySelector("input[name='message']") as HTMLInputElement
        console.log(messageEl.value)
        this.setProps({
          ...props,
          messageValue: messageEl.value,
        })

        // props.socket.send(messageEl.value)
      },
    })
  }
  componentDidMount(props: any): void {
    document.getElementById("change-chat-title")?.addEventListener("click", (e: Event) => {
      const modalDiv = e.target as HTMLElement
      modalDiv.classList.remove("active")
    })
    document.querySelector(".modal__body")?.addEventListener("click", (e: Event) => {
      e.stopPropagation()
    })
  }
  protected render(): string {
    // language=hbs
    return `
        <div class="modal" id="change-chat-title">
            <div class="modal__body">
                <header class="modal__body__title">Изменить аватар чата {{currentChat.title}}</header>
                {{{ChangeAvatar src=currentChat.avatar currentChatId=currentChat.id}}}
            </div>
        </div>
    `
  }
}
