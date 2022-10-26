import { Modal } from "./modal"
import { ChangeChatTitleModal } from "./changeChatTitle/changeChatTitle"
import { Block } from "core"
import { DeleteChatModal } from "./deleteChat/deleteChat"

const modals: typeof Block[] = [Modal, ChangeChatTitleModal, DeleteChatModal]
export default modals
