import { Store } from "core"

import "./chatContacts.scss"

import Block from "core/Block"
import { searchUsers } from "service/user"
import { ChatType } from "types/Chat"
import { getChats } from "service/chat"

type ChatContactsProps = {
  store: Store<AppState>
  events: Record<string, any>
  searchValue: string
  onInput: (e: FocusEvent) => void
  onBlur: () => void
  onFocus: () => void
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
        window.store.dispatch({ contacts: null })
      },
      onFocus: () => {
        window.store.dispatch(searchUsers, { login: "" })
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
        {{{ContactsList}}}
    </aside>
    `
  }
}
