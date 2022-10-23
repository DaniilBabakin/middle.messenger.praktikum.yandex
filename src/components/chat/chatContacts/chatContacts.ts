import Block from "core/Block"

import "./chatContacts.scss"
import contacts from "../../../data/contacts.json"
import * as avatar from "../../../assets/defaultAvatar.png"
import { withContacts, withStore } from "helpers"
import { Store } from "core"
import { UserDTO } from "api/types"
import { searchUsers } from "service/user"
import { withChats } from "helpers/withChats"
import { ChatType } from "types/Chat"
import { getChats } from "service/chat"

type ChatContactsProps = {
  store: Store<AppState>
  chats: ChatType[]
  events: Record<string, any>
  searchValue: string
  onInput: (e: FocusEvent) => void
  onBlur: () => void
  onFocus: () => void
  onClick: (e: FocusEvent) => void
}

export class ChatContacts extends Block<ChatContactsProps> {
  static componentName = "ChatContacts"

  constructor(props: ChatContactsProps) {
    super()
    this.setProps({
      ...props,
      searchValue: "",
      onInput: (e: FocusEvent) => {
        const inputEl = e.target as HTMLInputElement
        // this.setProps({
        //   ...props,
        //   searchValue: inputEl.value,
        // })
        if (inputEl.value === "") {
          window.store.dispatch(getChats)
        } else {
          window.store.dispatch(searchUsers, { login: inputEl.value })
        }
      },
      onBlur: () => {
        console.log("123")
        window.store.dispatch({ contacts: null })
      },
      onFocus: () => {
        window.store.dispatch(searchUsers, { login: '' })
        console.log("GFDFG")
      },
      onClick: (e: FocusEvent) => {
        const inputEl = e.target as HTMLInputElement
      },
    })
  }
  protected render(): string {
    // language=hbs
    return `
    <aside class="contacts">
        {{{ContactLink text="Профиль >"}}}
        {{{ControlledInput 
            onInput=onInput 
            onFocus=onFocus
            onBlur=onBlur
            type="text" 
            value=searchValue
            inputClassName="search-input"
            divClassName="short"
            placeholder="Поиск"
            ref="searchResultsInputRef"
        }}}
        {{{ContactsList chats=chats}}}
    </aside>
    `
  }
}

