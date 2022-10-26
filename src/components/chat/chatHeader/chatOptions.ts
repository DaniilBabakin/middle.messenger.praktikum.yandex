import Block from "core/Block"
import { deleteChat } from "service/chat"
import WebSocketTransport from "service/webSocket"

import "./chatHeader.scss"

type ChatHeaderOptionsProps = {
  events: Record<string, any>
  changeAvatarClick: () => void
  deleteChatClick: () => void
}

export class ChatHeaderOptions extends Block<ChatHeaderOptionsProps> {
  static componentName = "ChatHeaderOptions"
  constructor(props: ChatHeaderOptionsProps) {
    super({
      ...props,
      events: {
        mouseenter: () => {
          const optionsDiv = document.querySelector(".messages__header__options") as HTMLElement
          console.log(optionsDiv)
          optionsDiv.classList.add("active")
        },
        mouseleave: () => {
          const optionsDiv = document.querySelector(".messages__header__options") as HTMLElement
          console.log(optionsDiv)
          optionsDiv.classList.remove("active")
        },
      },
    })
    this.setProps({
      ...props,
      changeAvatarClick: () => {
        document.querySelector("#change-chat-avatar")?.classList.add("active")
      },
      deleteChatClick: () => {
        document.querySelector("#delete-chat")?.classList.add("active")
      },
    })
  }
  protected render(): string {
    // language=hbs
    return `
        <div class="messages__header__open-options">&#xF142;
            <div class="messages__header__options">
                {{{Button 
                    className="messages__header__options__button" 
                    text="Изменить аватар чата" 
                    onClick=changeAvatarClick
                }}}
                {{{Button 
                    className="messages__header__options__button" 
                    text="Удалить чат" 
                    onClick=deleteChatClick
                }}}
            </div>
        </div>
    `
  }
}
