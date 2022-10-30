import { UserDTO } from "api/types"
import { BlockClass } from "core"

type WithContactsProps = { contacts: Nullable<UserDTO[]> }

export function withContacts<P extends WithContactsProps>(WrappedBlock: BlockClass<P>) {
  // @ts-expect-error No base constructor has the specified
  return class extends WrappedBlock<P> {
    public static componentName = WrappedBlock.componentName || WrappedBlock.name

    constructor(props: P) {
      super({ ...props, contacts: window.store.getState().contacts })
    }

    __onChangeUserCallback = (prevState: AppState, nextState: AppState) => {
      if (JSON.stringify(prevState.contacts) !== JSON.stringify(nextState.contacts)) {
        // @ts-expect-error this is not typed
        this.setProps({ ...this.props, contacts: nextState.contacts })
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
  } as BlockClass<Omit<P, "contacts">>
}
