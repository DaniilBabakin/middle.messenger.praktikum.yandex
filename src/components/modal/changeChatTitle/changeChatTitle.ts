import Block from "core/Block"

import "../modal.scss"

export class ChangeChatTitleModal extends Block {
  static componentName = "ChangeChatTitleModal"
  constructor() {
    super({
      events: {
        click: () => {
          console.log("12345")
        },
      },
    })
  }
  componentDidMount(props: any): void {
    document.querySelector(".modal")?.addEventListener("click", () => {
      console.log("12234532")
    })
    document.querySelector(".modal__body")?.addEventListener("click", (e: Event) => {
      e.stopPropagation()
    })
  }
  protected render(): string {
    // language=hbs
    return `
        <div class="modal">
            <div class="modal__body">ПОКА)</div>
        </div>
    `
  }
}
