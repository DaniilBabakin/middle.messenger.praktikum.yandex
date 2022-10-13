import { BlockClass } from "core"
import { HTTPTransport } from "core/CustomFetch"
import { Router } from "service/router/Router"

type WithRouterProps = { router: Router }

export function withRouter<P extends WithRouterProps>(WrappedBlock: BlockClass<P>) {
  // @ts-expect-error No base constructor has the specified number of type arguments
  return class extends WrappedBlock<P> {
    public static componentName = WrappedBlock.componentName || WrappedBlock.name

    constructor(props: P) {
      super({ ...props, router: window.router })
    }
  } as BlockClass<Omit<P, "router">>
}
