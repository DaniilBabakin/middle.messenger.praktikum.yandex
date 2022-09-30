import Block from "core/Block"

import "./chatContacts.scss"
import contacts from "../../../data/contacts.json"
import * as avatar from "../../../assets/defaultAvatar.png"

export class ChatContacts extends Block {
  static componentName = "ChatContacts"

  constructor() {
    super(contacts)
    this.setProps({
      contacts: contacts,
    })
  }
  protected render(): string {
    // language=hbs
    return `
    <aside class="contacts">
    {{{ContactLink text="Профиль >"}}}
    {{{ContactSearchInput}}}
    <div class="contacts__list">
      {{#each contacts}}
          <div class="contacts__list__item">
            <img src="${avatar}" alt="Фотография пользователя" class="item__image"/>
            <div class="item__text">
              <span class="item__text__name">{{this.name}}</span>
              <span class="item__text__last-message">{{this.lastMessage}}</span>
            </div>
            <div class="item__info">
              <span class="item__info__time">{{this.time}}</span>
              {{#if this.missedMessages}}
              <span class="item__info__missed-messages">{{this.missedMessages}}</span>
              {{else}}
              <span class="item__info__missed-messages_empty">1</span>
              {{/if}}
            </div>
          </div>
      {{/each}}
  
    </div>
  </aside>
    `
  }
}
