import { Modal } from "./modal"
import { ChangeChatTitleModal } from "./changeChatTitle/changeChatTitle"
import { Block } from "core"

const modals: typeof Block[] = [Modal, ChangeChatTitleModal]
export default modals
