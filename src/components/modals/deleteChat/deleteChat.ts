import Block from "core/Block"
import { deleteChat } from "service/chat"
import { CurrentChatType } from "types/CurrentChat"

import "../modal.scss"

type DeleteChatModalProps = {
  currentChat: CurrentChatType
  cancelDeleteClick: () => void
  submitDeleteClick: () => void
}

export class DeleteChatModal extends Block<DeleteChatModalProps> {
  static componentName = "DeleteChatModal"
  constructor(props: DeleteChatModalProps) {
    super(props)
    this.setProps({
      ...props,
      cancelDeleteClick: () => {
        const modalDiv = document.getElementById("delete-chat") as HTMLElement
        modalDiv.classList.remove("active")
      },
      submitDeleteClick: () => {
        window.store.dispatch(deleteChat,props.currentChat.id)
      },
    })
  }
  componentDidMount(): void {
    document.getElementById("delete-chat")?.addEventListener("click", (e: Event) => {
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
        <div class="modal" id="delete-chat">
            <div class="modal__body">
                <header class="modal__body__title">Подтвердите удаление чата</header>
                <div>
                    {{{Button className="cancel-delete" onClick=cancelDeleteClick text="Отменить"}}}
                    {{{Button className="submit-delete" onClick=submitDeleteClick text="Удалить"}}}
                </div>
            </div>
        </div>
    `
  }
}
