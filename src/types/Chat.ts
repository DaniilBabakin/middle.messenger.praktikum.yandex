import { LastMessageType } from "./LastMessage"

export type ChatType = {
    avatar: string | null
    created_by: number
    id: number
    lastMessage: LastMessageType
    title: string
    unread_count: number
}
