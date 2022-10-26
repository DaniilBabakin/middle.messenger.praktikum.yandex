export type ChatMessageType = {
  chat_id: number
  content: string
  file: Nullable<File>
  id: number
  is_read: boolean
  time: string
  customTime: string
  type: string
  user_id: number
  whenDate?:string
}
