import Block from "core/Block"

import "./contactsList.scss"
import { ChatType } from "types/Chat"

type ContactsListProps = {
  chats: () => void
}

export class ContactsList extends Block<ContactsListProps> {
  static componentName = "ContactsList"

  constructor(props: ContactsListProps) {
    super(props)
    this.setProps({ ...props, chats: () => window.store.getState().chats })
    console.log("CHAT CONTACTS", this.props)
  }
  protected render(): string {
    // language=hbs
    return `
        <div class="contacts__list">
            {{#each chats}}
                {{{ChatItem fromSearch=this.fromSearch chat=this}}}
            {{/each}}
        </div>
    `
  }
}
