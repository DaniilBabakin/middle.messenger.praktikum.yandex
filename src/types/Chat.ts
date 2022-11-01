import WebSocketTransport from "service/webSocket"
import { LastMessageType } from "./LastMessage"

export type ChatType = {
    avatar: Nullable<string>
    created_by: number
    id: number
    lastMessage: LastMessageType
    title: string
    unread_count: number
    socket?:WebSocketTransport
}
