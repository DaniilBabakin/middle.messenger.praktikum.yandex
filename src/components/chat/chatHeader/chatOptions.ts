import Block from "core/Block"

import "./chatHeader.scss"

export class ChatHeaderOptions extends Block {
  static componentName = "ChatHeaderOptions"
  constructor() {
    super({events:{
        mouseover:()=>{
            const optionsDiv = document.querySelector('.messages__header__options') as HTMLElement
            console.log(optionsDiv)
            optionsDiv.classList.add('active')
        },
        mouseleave:()=>{
            const optionsDiv = document.querySelector('.messages__header__options') as HTMLElement
            console.log(optionsDiv)
            optionsDiv.classList.remove('active')
        }
    }})
  }

  protected render(): string {
    // language=hbs
    return `
        <button class="messages__header__open-options">&#xF142;
            <div class="messages__header__options"></div>
        </button>
    `
  }
}
