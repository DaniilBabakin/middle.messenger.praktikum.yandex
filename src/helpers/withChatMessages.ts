import { BlockClass } from "core"
import { ChatMessageType } from "types/ChatMessage"

type WithChatMessagesProps = { chatMessages: ChatMessageType[] }

export function withChatMessages<P extends WithChatMessagesProps>(WrappedBlock: BlockClass<P>) {
  // @ts-expect-error No base constructor has the specified
  return class extends WrappedBlock<P> {
    public static componentName = WrappedBlock.componentName || WrappedBlock.name

    constructor(props: P) {
      super({ ...props, chatMessages: window.store.getState().chatMessages })
    }

    __onChangeUserCallback = (prevState: AppState, nextState: AppState) => {
      if (JSON.stringify(prevState.chatMessages) !== JSON.stringify(nextState.chatMessages)) {
        console.log("CHATSMESSAGES", prevState.chatMessages, nextState.chatMessages)
        // @ts-expect-error this is not typed
        this.setProps({ ...this.props, chatMessages: nextState.chatMessages })
      }
    }

    componentDidMount(props: P) {
      super.componentDidMount(props)
      window.store.on("changed", this.__onChangeUserCallback)
    }

    componentWillUnmount() {
      super.componentWillUnmount()
      window.store.off("changed", this.__onChangeUserCallback)
    }
  } as BlockClass<Omit<P, "chatMessages">>
}
