import Block from "core/Block"
import WebSocketTransport from "service/webSocket"

import "./chatHeader.scss"

type ChatHeaderOptionsProps = {
  events: Record<string, any>
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
  }
  componentDidMount(props: any): void {
    document.querySelector(".change-chat-title-btn")?.addEventListener("click", () => {
      document.querySelector("#change-chat-title")?.classList.add("active")
    })
  }
  protected render(): string {
    // language=hbs
    return `
        <div class="messages__header__open-options">&#xF142;
            <div class="messages__header__options">
                <button class="change-chat-title-btn">Изменить название чата</button>
            </div>
        </div>
    `
  }
}
