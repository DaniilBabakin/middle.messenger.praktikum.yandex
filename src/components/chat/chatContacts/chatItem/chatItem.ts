import { Block } from "core"

import "./chatItem.scss"

import * as avatar from "../../../../assets/defaultAvatar.png"

import { chatsAPI } from "api/chatAPI"
import { ChatType } from "types/Chat"
import { getChatByTitle } from "service/chat"

interface ChatItemType extends ChatType {
  fromSearch?: boolean
}

interface ChatItemProps {
  chat: ChatItemType
  fromSearch?: boolean
  events: Record<string, any>
}

export class ChatItem extends Block<ChatItemProps> {
  static componentName = "ChatItem"
  _socket: any = undefined
  constructor(props: ChatItemProps) {
    super({
      ...props,
      events: {
        click: () => {
          if (props.fromSearch) {
            window.store.dispatch(getChatByTitle, {
              id: props.chat.id,
              avatar: props.chat.avatar,
              title: `${props.chat.login}`,
            })
          } else {
            chatsAPI.getToken(props.chat.id).then((res) => {
              window.store.dispatch({
                chats: window.store.getState().chats?.map((item) => {
                  return item.id === props.chat.id ? { ...item, unread_count: 0 } : { ...item }
                }),
                currentChat: { ...props.chat, token: res.token },
              })
            })
          }

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
                {{#if chat.login}}
                    <span class="item__text__name">{{chat.login}}</span>
                {{else}}
                    <span class="item__text__name">{{chat.title}}</span>
                {{/if}}
                {{#if chat.last_message}}
                   <span class="item__text__last-message">{{#ifMyMessageByLogin chat.last_message.user.login}}{{/ifMyMessageByLogin}}{{chat.last_message.content}}</span>
                {{/if}}
            </div>
            <div class="item__info">
                <time class="item__info__time">{{this.customTime}}</time>
                {{#if chat.unread_count}}
                    <span class="item__info__missed-messages">{{chat.unread_count}}</span>
                {{/if}}
                <span class="item__info__missed-messages_empty">1</span>
            </div>
        </div>
      `
  }
}
