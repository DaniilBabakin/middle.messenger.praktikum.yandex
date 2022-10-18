import { UserDTO } from "api/types"
import { Block } from "core"
import { ChatType } from "types/Chat"
import { ChatMessageType } from "types/ChatMessage"
import { CurrentChatType } from "types/CurrentChat"

declare global {
  export type Nullable<T> = T | null

  export type Keys<T extends Record<string, unknown>> = keyof T
  export type Values<T extends Record<string, unknown>> = T[Keys<T>]

  export type Indexed = { [key: string]: any }

  export type AppState = {
    appIsInited: boolean
    screen: Screens | null
    isLoading: boolean
    formError: string | null
    contacts: User[] | null
    chats: ChatType[] | null
    currentChat: CurrentChatType
    chatMessages: ChatMessageType[]
    user: User | null
  }

  export type User = {
    id: number
    login: string
    firstName: string
    secondName: string
    displayName: string
    avatar: string
    phone: string
    email: string
  }

  module "*.png"
  module "*.svg"
  module "*.jpeg"
  module "*.jpg"
}
export {}
