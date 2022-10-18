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

type ChatContactsProps = {
  store: Store<AppState>
  chats: ChatType[]
  contacts: User[]
  events: Record<string, any>
  searchValue: string
  onInput: (e: FocusEvent) => void
  onFocus: () => void
  onClick: (e: FocusEvent) => void
}

class ChatContacts extends Block<ChatContactsProps> {
  static componentName = "ChatContacts"

  constructor(props: ChatContactsProps) {
    super()
    this.setProps({
      ...props,
      searchValue: "",
      onInput: (e: FocusEvent) => {
        const inputEl = e.target as HTMLInputElement
        this.setProps({
          ...props,
          searchValue: inputEl.value,
        })
        window.store.dispatch(searchUsers, { login: inputEl.value })
      },
      onFocus: () => {
        console.log("123")
        window.store.dispatch({ contacts: null })
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
    {{{ContactSearchInput onInput=onInput searchValue=searchValue}}}
    <div class="contacts__list">
      {{#each chats}}
          {{{ChatItem onClick=onClick chat=this}}}
      {{/each}}
  
    </div>
  </aside>
    `
  }
}
function mapUserToProps(state: any) {
  return {
    contacts: state!.contacts,
  }
}
const ConnectedChatContacts = withChats(withContacts(ChatContacts))
export { ConnectedChatContacts as ChatContacts }
