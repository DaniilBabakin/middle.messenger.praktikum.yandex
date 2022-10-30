import Block from "core/Block"
import { withUser } from "helpers"
import { transformDate } from "helpers/transformDate"
import WebSocketTransport from "service/webSocket"
import { ChatMessageType } from "types/ChatMessage"
import { CurrentChatType } from "types/CurrentChat"

import "./chatMessages.scss"

type ChatMessagesProps = {
  user: Nullable<User>
  currentChat: CurrentChatType
  chatMessages: ChatMessageType[]
  _socketTransport: WebSocketTransport | undefined
  isLoading: boolean
}

export class ChatMessages extends Block<ChatMessagesProps> {
  static componentName = "ChatMessages"

  isWebSocketConnected: boolean = false
  webSocketUrl: string = "wss://ya-praktikum.tech/ws"
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
    if (this.props.currentChat) {
      this.props._socketTransport = new WebSocketTransport(
        this.webSocketUrl,
        window.store.getState().user,
        this.props.currentChat.id,
        this.props.currentChat.token,
      )
      this.props._socketTransport.eventBus.on(
        WebSocketTransport.EVENTS.WS_MESSAGES_ARRIVED,
        this.serveWSIncomingMessages.bind(this),
      )
      this.props._socketTransport.start()
    }
  }

  private serveWSIncomingMessages(messagesList: any) {
    this.setProps({ ...this.props, isLoading: true })
    if (Array.isArray(messagesList)) {
      messagesList = messagesList
        .map((message: ChatMessageType, index) => {
          return transformDate(message, messagesList, index)
        })
        .reverse()
    } else {
      messagesList = transformDate(messagesList, this.props.chatMessages, this.props.chatMessages.length - 2)
    }
    this.setProps({ ...this.props, chatMessages: this.props.chatMessages.concat(messagesList), isLoading: false })
    let objDiv = document.querySelector(".messages__main-block") as HTMLElement
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
            {{{DeleteChatModal currentChat=currentChat }}}
        </div>
    `
  }
}

