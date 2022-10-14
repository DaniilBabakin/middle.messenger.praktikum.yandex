import EventBus from "core/EventBus"

type WebSocketTransportProps = {
  chatId: number
  token: string
}

export default class WebSocketTransport {
  eventBus: EventBus
  private _socket: WebSocket
  private keepWSConnection: boolean = false
  private static WS_EVENTS = {
    PING: "ping",
    PONG: "pong",
    USER_CONNECTED: "user connected",
    GET_OLD: "get old",
    MESSAGE: "message",
  } as const
  user: User | null;
  constructor(user: User | null, chatId: number, token: string) {
    this.user = user
    this.eventBus = new EventBus()
    this._socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${user?.id}/${chatId}/${token}`)
    this._onOpen()
    this._onMessage()
    this._onError()
    this._onClose()
  }

  send(message: string) {
    this._socket.send(
      JSON.stringify({
        content: message,
        type: WebSocketTransport.WS_EVENTS.MESSAGE,
      }),
    )
  }

  private _onOpen() {
    this._socket.onopen = () => {
      console.log("Successfully connected to WS")
    }
  }

  private _onMessage() {
    this._socket.onmessage = (event) => {
      console.log("Receved data", event)
    }
  }

  private _onError() {
    this._socket.onerror = (event) => {
      console.log("Error", event)
    }
  }

  private _onClose() {
    this._socket.onclose = (event) => {
      if (event.wasClean) {
        console.log("Closed connection")
      } else {
        console.log("Connection interrupted")
      }
    }
  }
}
