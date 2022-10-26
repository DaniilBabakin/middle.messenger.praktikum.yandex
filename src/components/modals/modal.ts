import Block from "core/Block"

import "./modal.scss"

export class Modal extends Block {
  static componentName = "Modal"
  constructor() {
    super()
  }
  componentDidMount(): void {
    document.getElementById("base")?.addEventListener("click", () => {
      console.log("Modal is closed")
    })
    document.querySelector(".modal__body")?.addEventListener("click", (e: Event) => {
      e.stopPropagation()
    })
  }
  protected render(): string {
    // language=hbs
    return `
        <div class="modal" id="base">
            <div class="modal__body">Привет!</div>
        </div>
    `
  }
}
