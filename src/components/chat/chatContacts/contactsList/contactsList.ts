import Block from "core/Block"

import "./contactsList.scss"
import { ChatType } from "types/Chat"
import { withChats } from "helpers/withChats"
import { chatsAPI } from "api/chatAPI"

type ContactsListProps = {
  chats: ChatType[]
}

class ContactsList extends Block<ContactsListProps> {
  static componentName = "ContactsList"

  constructor(props: ContactsListProps) {
    super(props)
    if (!props.chats && window.location.pathname !== "/") {
      console.log(window.location)
      chatsAPI
        .getChats()
        .then((res) => {
          this.setProps({ ...props, chats: res })
        })
        .catch((e) => console.log(e))
    }
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

const ConnectedContactsList = withChats(ContactsList)
export { ConnectedContactsList as ContactsList }
