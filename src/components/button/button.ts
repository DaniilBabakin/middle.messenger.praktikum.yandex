import Block from "core/Block"

import "./button.scss"

interface ButtonProps {
  text: string
  className: string
  type?: string
  onClick?: () => void
}

export class Button extends Block {
  static componentName = "Button"
  constructor({ text, className, type = "button", onClick }: ButtonProps) {
    super({ text, className, type, events: { click: onClick } })
  }

  protected render(): string {
    // language=hbs
    return `
        <button class="{{className}}" type="{{type}}">{{text}}</button>
    `
  }
}
