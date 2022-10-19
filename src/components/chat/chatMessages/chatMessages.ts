import Block from "core/Block"
import { withUser } from "helpers"
import { transformDate } from "helpers/transformDate"
import { withCurrentChat } from "helpers/withCurrentChat"
import WebSocketTransport from "service/webSocket"
import { ChatMessageType } from "types/ChatMessage"
import { CurrentChatType } from "types/CurrentChat"

import "./chatMessages.scss"

//TODO:
type ChatMessagesProps = {
  user: User | null
  currentChat: CurrentChatType
  chatMessages: ChatMessageType[]
  _socketTransport: WebSocketTransport | undefined
  isLoading: boolean
}

class ChatMessages extends Block<ChatMessagesProps> {
  static componentName = "ChatMessages"

  isWebSocketConnected: boolean = false

  constructor(props: ChatMessagesProps) {
    super(props)
    this.setProps({
      ...props,
      chatMessages: [],
      _socketTransport: undefined,
      isLoading: false,
    })
  }

  componentDidMount(): void {
    this.props._socketTransport = new WebSocketTransport(
      this.props.user,
      this.props.currentChat.id,
      this.props.currentChat.token,
    )
    this.props._socketTransport.eventBus.on(
      WebSocketTransport.EVENTS.WS_MESSAGES_ARRIVED,
      this.serveWSIncomingMessages.bind(this),
    )
    this.props._socketTransport.start()
  }

  private serveWSIncomingMessages(messagesList: any) {
    this.setProps({ ...this.props, isLoading: true })
    let objDiv = document.querySelector(".messages__main-block") as HTMLElement

    if (Array.isArray(messagesList)) {
      messagesList = messagesList
        .map((message: ChatMessageType, index) => {
          return transformDate(message, messagesList, index)
        })
        .reverse()
    } else {
      const date = new Date(messagesList.time)
      let minutes = date.getMinutes()
      messagesList = { ...messagesList, time: `${date.getHours()}:${minutes < 10 ? `0${minutes}` : minutes}` }
    }
    this.setProps({ ...this.props, chatMessages: this.props.chatMessages.concat(messagesList), isLoading: false })

    objDiv.scrollTop = objDiv.scrollHeight
  }

  protected componentWillUnmount(): void {
    this.props._socketTransport?.stop()
  }

  protected render(): string {
    // language=hbs
    return `
        <div class="messages">
            {{{ChatHeader currentChat=currentChat}}}
            {{{ChatMainBlock chatMessages=chatMessages isLoading=isLoading}}}
            {{{ChatFooter socket=_socketTransport}}}
            {{{ChangeChatTitleModal currentChat=currentChat socket=_socketTransport}}}
        </div>
    `
  }
}

const ConnectedChatMessages = withUser(ChatMessages)
export { ConnectedChatMessages as ChatMessages }
