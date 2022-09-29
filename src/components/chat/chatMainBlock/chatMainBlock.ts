import Block from "core/Block"

import "./chatMainBlock.scss"

export class ChatMainBlock extends Block {
  constructor() {
    super()
  }

  protected render(): string {
    // language=hbs
    return `
        <div class="messages__main-block"> 
            <span class="messages__main-block__time">Сегодня</span>
            <div class="message friend__message">
            <p class="message__text">Привет!</p>
            <span class="message__time">16:39</span>
            </div>
            <div class="message friend__message">
            <p class="message__text">Как настроение?</p>
            <span class="message__time">16:40</span>
            </div>
        </div>
    `
  }
}
