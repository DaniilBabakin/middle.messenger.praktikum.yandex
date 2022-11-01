import Block from "core/Block"

import "./chatHeader.scss"
import * as avatar from "../../../assets/defaultAvatar.png"
import { CurrentChatType } from "types/CurrentChat"
type ChatHeaderProps = {
  currentChat: CurrentChatType
}

export class ChatHeader extends Block {
  static componentName = "ChatHeader"
  constructor(props: ChatHeaderProps) {
    super(props)
  }

  protected render(): string {
    // language=hbs
    return `
        <header class="messages__header">
            <div class="messages__header__person">
            <img src=https://ya-praktikum.tech/api/v2/resources{{currentChat.avatar}} onerror="this.onerror=null;this.src='${avatar}';" alt="Фотография собеседника" class="messages__header__person__image"/>
            <span>{{currentChat.title}}</span>
            </div>
            {{#if currentChat}}
                {{{ChatHeaderOptions}}}
            {{/if}}
        </header>
    `
  }
}
