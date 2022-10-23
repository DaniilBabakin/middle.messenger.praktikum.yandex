import Block from "core/Block"
import WebSocketTransport from "service/webSocket"
import { CurrentChatType } from "types/CurrentChat"

import "../modal.scss"

type ChangeChatTitleModalProps = {
  currentChat: CurrentChatType
  socket: WebSocketTransport
}

export class ChangeChatTitleModal extends Block<ChangeChatTitleModalProps> {
  static componentName = "ChangeChatTitleModal"
  constructor(props: ChangeChatTitleModalProps) {
    super(props)
  }
  componentDidMount(props: any): void {
    document.getElementById("change-chat-avatar")?.addEventListener("click", (e: Event) => {
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
        <div class="modal" id="change-chat-avatar">
            <div class="modal__body">
                <header class="modal__body__title">Изменить аватар чата {{currentChat.title}}</header>
                {{{ChangeAvatar src=currentChat.avatar currentChatId=currentChat.id}}}
            </div>
        </div>
    `
  }
}
