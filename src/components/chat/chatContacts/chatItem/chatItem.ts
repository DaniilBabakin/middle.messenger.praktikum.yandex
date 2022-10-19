import { Block } from "core"
import { router } from "../../../../index"
import { ROUTES } from "constants/routes"

import * as avatar from "../../../../assets/defaultAvatar.png"
import { chatsAPI } from "api/chatAPI"
import { ChatType } from "types/Chat"

interface ChatItemProps {
  chat: ChatType
}

export class ChatItem extends Block {
  static componentName = "ChatItem"
  constructor(props: ChatItemProps) {
    super({
      ...props,
      events: {
        click: (e: FocusEvent) => {
          const inputEl = e.target as HTMLInputElement
          chatsAPI.getToken(props.chat.id).then((token) => {
            window.store.dispatch({ currentChat: { ...props.chat, token: token } })
          })
          console.log(props.chat)
        },
      },
    })
  }
  protected render(): string {
    return `
        <div class="contacts__list__item" id="{{id}}">
            <img src=https://ya-praktikum.tech/api/v2/resources{{chat.avatar}} onerror="this.onerror=null;this.src='${avatar}';" alt="Фотография пользователя" class="item__image"/>
            <div class="item__text">
                <span class="item__text__name">{{chat.title}}</span>
            </div>
            <div class="item__info">
                <time class="item__info__time">{{this.time}}</time>
                {{#if this.missedMessages}}
                <span class="item__info__missed-messages">{{this.missedMessages}}</span>
                {{else}}
                <span class="item__info__missed-messages_empty">1</span>
                {{/if}}
            </div>
        </div>
      `
  }
}
