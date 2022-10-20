import EventBus from "core/EventBus"

export default class WebSocketTransport {
  static EVENTS = {
    WS_MESSAGES_ARRIVED: "ws-messages-arrived",
  } as const

  eventBus: EventBus
  public isGettingOldMessages: boolean = false

  private static WS_EVENTS = {
    PING: "ping",
    PONG: "pong",
    USER_CONNECTED: "user connected",
    GET_OLD: "get old",
    MESSAGE: "message",
  } as const

  private static SERVICE_MESSAGE_TYPES = [
    WebSocketTransport.WS_EVENTS.USER_CONNECTED,
    WebSocketTransport.WS_EVENTS.PONG,
  ]

  private _socket: WebSocket
  private keepWSConnection: boolean = false
  user: User | null
  constructor(user: User | null, chatId: number, token: string) {
    this.user = user
    this.eventBus = new EventBus()
    this._socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${user?.id}/${chatId}/${token}`)
    this._onOpen()
    this._onMessage()
    this._onError()
    this._onClose()
  }

  start() {
    this.keepWSConnection = true
    this.startPingingSocket()
  }

  stop() {
    this.keepWSConnection = false
  }

  send(message: string) {
    console.log(message)
    this._socket.send(
      JSON.stringify({
        content: message,
        type: WebSocketTransport.WS_EVENTS.MESSAGE,
      }),
    )
  }
  
  private startPingingSocket(timeout: number = 1000) {
    setTimeout(() => {
      this._socket.send(
        JSON.stringify({
          type: WebSocketTransport.WS_EVENTS.PING,
        }),
      )
      if (this.keepWSConnection) {
        this.startPingingSocket()
      }
    }, timeout)
  }
  
  public getOldMessages(page: string = "0") {
    console.log("Get messages request")
    this.isGettingOldMessages = true
    this._socket.send(
      JSON.stringify({
        content: page,
        type: WebSocketTransport.WS_EVENTS.GET_OLD,
      }),
    )
  }

  private _onOpen() {
    this._socket.onopen = () => {
      console.log("Successfully connected to WS")
      this.getOldMessages()
    }
  }

  private _onMessage() {
    this._socket.onmessage = (event) => {
      const jsonData = JSON.parse(event.data)
      if (WebSocketTransport.SERVICE_MESSAGE_TYPES.includes(jsonData.type)) {
        return
      }

      console.log("Receved data", event, jsonData)
      let messages: any[]

      messages = jsonData
      this.eventBus.emit(WebSocketTransport.EVENTS.WS_MESSAGES_ARRIVED, messages)
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
