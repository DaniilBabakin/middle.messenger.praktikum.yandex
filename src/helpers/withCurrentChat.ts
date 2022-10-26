import { chatsAPI } from "api/chatAPI"
import { BlockClass } from "core"
import { CurrentChatType } from "types/CurrentChat"

type WithCurrentChatProps = { currentChat: CurrentChatType }

export function withCurrentChat<P extends WithCurrentChatProps>(WrappedBlock: BlockClass<P>) {
  // @ts-expect-error No base constructor has the specified
  return class extends WrappedBlock<P> {
    public static componentName = WrappedBlock.componentName || WrappedBlock.name

    constructor(props: WithCurrentChatProps) {
      super({ ...props, currentChat: window.store.getState().currentChat })
    }

    __onChangeCurrentChatCallback = (prevState: AppState, nextState: AppState) => {
      if (JSON.stringify(prevState.currentChat) !== JSON.stringify(nextState.currentChat)) {
        // @ts-expect-error this is not typed
        this.setProps({ ...this.props, currentChat: nextState.currentChat })
      }
    }

    componentDidMount(props:WithCurrentChatProps) {
      super.componentDidMount(props)
      window.store.on("changed", this.__onChangeCurrentChatCallback)
    }

    componentWillUnmount() {
      super.componentWillUnmount()
      window.store.off("changed", this.__onChangeCurrentChatCallback)
    }
  } as BlockClass<Omit<P, "currentChat">>
}
