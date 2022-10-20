import { LastMessageType } from "./LastMessage"

export type CurrentChatType = {
  avatar: string | null
  created_by: number
  id: number
  lastMessage: LastMessageType
  title: string
  token: string
  unread_count: number
}
