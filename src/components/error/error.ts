import Block from "../../core/Block"

import "./error.scss"

interface ErrorProps {
  text?: string
  className?: string
}

export class Error extends Block {
  static componentName = "Error"
  constructor(props: ErrorProps) {
    super(props)
  }
  protected render(): string {
    // language=hbs
    return `
      <div class="{{#if text}}active{{/if}} ${this.props.className} error">{{#if text}}{{text}}{{/if}}</div>
    `
  }
}
