import EventBus from "./EventBus"
import { nanoid } from "nanoid"
import Handlebars from "handlebars"

type Events = Values<typeof Block.EVENTS>
interface HTMLElementWithRefs extends HTMLElement {
  refs: { [key: string]: HTMLElementWithRefs }
  setProps: ({}) => void
}

export interface BlockClass<P> extends Function {
  new (props: P): Block<P>
  componentName?: string
}

export default class Block<P = any> {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  } as const

  static componentName: string

  public id = nanoid(6)

  protected _element: Nullable<HTMLElement> = null
  protected readonly props: P
  protected children: { [id: string]: Block } = {}

  eventBus: () => EventBus<Events>

  protected state: any = {}
  protected refs: { [key: string]: HTMLElementWithRefs } = {}

  public constructor(props?: P) {
    const eventBus = new EventBus<Events>()

    this.getStateFromProps()

    this.props = this._makePropsProxy(props || ({} as P))
    this.state = this._makePropsProxy(this.state)

    this.eventBus = () => eventBus

    this._registerEvents(eventBus)

    eventBus.emit(Block.EVENTS.INIT, this.props)
  }

  private _registerEvents(eventBus: EventBus<Events>) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  private _createResources() {
    this._element = this._createDocumentElement("div")
  }

  protected getStateFromProps(): void {
    this.state = {}
  }

  init() {
    this._createResources()
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER, this.props)
  }

  private _componentDidMount() {
    this.componentDidMount()
  }

  componentDidMount() {}

  private _componentDidUpdate() {
    const response = this.componentDidUpdate()
    if (!response) {
      return
    }
    this._render()
  }

  componentDidUpdate() {
    return true
  }

  setProps = (nextProps: P) => {
    if (!nextProps) {
      return
    }

    Object.assign(this.props as {}, nextProps)
  }

  setState = (nextState: any) => {
    if (!nextState) {
      return
    }

    Object.assign(this.state, nextState)
  }

  get element() {
    return this._element
  }

  private _render() {
    const fragment = this._compile()

    this._removeEvents()
    const newElement = fragment.firstElementChild!

    this._element!.replaceWith(newElement)

    this._element = newElement as HTMLElement
    this._addEvents()
  }

  protected render(): string {
    return ""
  }

  getContent(): HTMLElement {
    // ??????, ?????????? ?????????????? CDM ???????????? ?????????? ???????????????????? ?? DOM
    if (this.element?.parentNode?.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      setTimeout(() => {
        if (this.element?.parentNode?.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
          this.eventBus().emit(Block.EVENTS.FLOW_CDM)
        }
      }, 200)
    }

    return this.element!
  }

  private _makePropsProxy = (props: P): any => {
    let waitProxy = false
    return new Proxy(props as any, {
      get(target: Record<string, unknown>, prop: string) {
        const value = target[prop]
        return typeof value === "function" ? value.bind(target) : value
      },
      set: (target: Record<string, any>, prop: string, value: any) => {
        if (typeof target[prop] !== "undefined" && value === target[prop]) {
          return true
        }
        target[prop] = value
        if (!waitProxy) {
          waitProxy = true
          setTimeout(() => {
            this.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target)
            waitProxy = false
          }, 10)
        }
        return true
      },
      deleteProperty() {
        throw new Error("?????? ??????????????")
      },
    }) as unknown as P
  }

  private _createDocumentElement(tagName: string) {
    return document.createElement(tagName)
  }

  private _removeEvents() {
    const events: Record<string, () => void> = (this.props as any).events

    if (!events || !this._element) {
      return
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element!.removeEventListener(event, listener)
    })
  }

  private _addEvents() {
    const events: Record<string, () => void> = (this.props as any).events

    if (!events) {
      return
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element!.addEventListener(event, listener)
    })
  }

  private _compile(): DocumentFragment {
    const fragment = document.createElement("template")

    /**
     * ???????????????? ????????????
     */
    const template = Handlebars.compile(this.render())
    fragment.innerHTML = template({ ...this.state, ...this.props, children: this.children, refs: this.refs })

    /**
     * ???????????????? ???????????????? ???? ????????????????????
     */
    Object.entries(this.children).forEach(([id, component]) => {
      /**
       * ???????? ???????????????? ???? id
       */
      const stub = fragment.content.querySelector(`[data-id="${id}"]`)

      if (!stub) {
        return
      }

      const stubChilds = stub.childNodes.length ? stub.childNodes : []

      /**
       * ???????????????? ???????????????? ???? component._element
       */
      const content = component.getContent()
      stub.replaceWith(content)

      /**
       * ???????? ?????????????? layout-??, ???????? ?????????????????? ??????????
       */
      const layoutContent = content.querySelector("[data-layout='1']")

      if (layoutContent && stubChilds.length) {
        layoutContent.append(...stubChilds)
      }
    })

    /**
     * ???????????????????? ????????????????
     */
    return fragment.content
  }

  show() {
    this.getContent().style.display = "block"
  }

  hide() {
    this.getContent().style.display = "none"
  }
}
