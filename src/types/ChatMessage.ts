export type ChatMessageType = {
  chat_id: number
  content: string
  file: File | null
  id: number
  is_read: boolean
  time: string
  customTime: string
  type: string
  user_id: number
  whenDate?:string
}
