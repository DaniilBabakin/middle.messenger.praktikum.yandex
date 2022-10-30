import { BlockClass } from "core"
import { ChatType } from "types/Chat"

type WithChatsProps = { chats: ChatType[] }

export function withChats<P extends WithChatsProps>(WrappedBlock: BlockClass<P>) {
  // @ts-expect-error No base constructor has the specified
  return class extends WrappedBlock<P> {
    public static componentName = WrappedBlock.componentName || WrappedBlock.name

    constructor(props: P) {
      super({ ...props, chats: window.store.getState().chats })
    }

    __onChangeChatsCallback = (prevState: AppState, nextState: AppState) => {
      if (JSON.stringify(prevState.chats) !== JSON.stringify(nextState.chats)) {
        console.log("WITHCHATS", prevState.chats, nextState.chats)
        // @ts-expect-error this is not typed
        this.setProps({ ...this.props, chats: nextState.chats })
      }
    }

    componentDidMount(props: WithChatsProps) {
      super.componentDidMount(props)
      window.store.on("changed", this.__onChangeChatsCallback)
    }

    componentWillUnmount() {
      super.componentWillUnmount()
      window.store.off("changed", this.__onChangeChatsCallback)
    }
  } as BlockClass<Omit<P, "chats">>
}
