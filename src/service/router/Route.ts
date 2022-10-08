import { Block, renderDOM } from "core"

export class Route<P = any> {
  private _pathname: string
  private _blockClass: typeof Block
  private _block: Block | null
  private _props: P
  constructor(pathname: string, view: typeof Block, props: P) {
    this._pathname = pathname
    this._blockClass = view
    this._block = null
    this._props = props
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname
      this.render()
    }
  }

  leave() {
    if (this._block) {
      this._block = null
    }
  }

  match(pathname: string) {
    return pathname === this._pathname
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass()
      renderDOM(this._block)
      console.log("Я тут", this._block)
      return
    }
    this._block.show()
    return this
  }
}
