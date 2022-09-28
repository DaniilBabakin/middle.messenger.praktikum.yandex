import Block from "core/Block"

import "./chatHeader.scss"
import * as avatar from "../../../assets/defaultAvatar.png"
export class ChatHeader extends Block {
  constructor() {
    super()
  }

  protected render(): string {
    // language=hbs
    return `
        <header class="messages__header">
            <div class="messages__header__person">
            <img src="${avatar}" alt="Фотография собеседника" class="messages__header__person__image"/>
            <span>Игорь Николаев</span>
            </div>
            <span class="messages__header__options">&#xF142;</span>
        </header>
    `
  }
}
