import Block from "core/Block"
import "./main.scss"
import { withCurrentChat } from "helpers/withCurrentChat"
import { CurrentChatType } from "types/CurrentChat"
import { withUser } from "helpers"

type MainPageProps = {
  currentChat: CurrentChatType
  user: User
}

class MainPage extends Block<MainPageProps> {
  constructor(props: MainPageProps) {
    super(props)
  }
  render() {
    // language=hbs
    return `
        <main class="main">
            {{{ChatContacts}}}
            {{{ChatMessages currentChat=currentChat user=user}}}
        </main>
    `
  }
}
const ConnectedMainPage = withCurrentChat(withUser(MainPage))
export { ConnectedMainPage as MainPage }
