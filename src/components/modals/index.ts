import { Modal } from "./modal"
import { ChangeChatTitleModal } from "./changeChatTitle/changeChatTitle"
import { DeleteChatModal } from "./deleteChat/deleteChat"

const modals: Array<BlockConstructable> = [Modal, ChangeChatTitleModal, DeleteChatModal]
export default modals
