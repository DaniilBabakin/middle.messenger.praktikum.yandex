import { LastMessageType } from "./LastMessage"

export type CurrentChatType = {
  avatar: Nullable<string>
  created_by: number
  id: number
  lastMessage: LastMessageType
  title: string
  token: string
  unread_count: number
}
