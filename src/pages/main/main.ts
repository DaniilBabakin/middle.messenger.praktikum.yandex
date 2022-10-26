import Block from "core/Block"
import "./main.scss"
import { LoginPage } from "../login/login"
import { validateForm, ValidateType } from "helpers/validateForm"
import { withCurrentChat } from "helpers/withCurrentChat"
import { CurrentChatType } from "types/CurrentChat"
import { getChats } from "service/chat"

type MainPageProps = {
  currentChat: CurrentChatType
}

class MainPage extends Block<MainPageProps> {
  constructor(props: MainPageProps) {
    super(props)
    if(!window.store.getState().chats){
        window.store.dispatch(getChats)
    }
  }
  render() {
    // language=hbs
    return `
        <main class="main">
            {{{ChatContacts}}}
            {{{ChatMessages currentChat=currentChat}}}
        </main>
    `
  }
}
const ConnectedMainPage = withCurrentChat(MainPage)
export { ConnectedMainPage as MainPage }
