import Block from "core/Block"

import './loader.scss'

export class Loader extends Block {
  static componentName = "Loader"
  
  constructor() {
    super()
  }

  protected render(): string {
    // language=hbs
    return `
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    `
  }
}

