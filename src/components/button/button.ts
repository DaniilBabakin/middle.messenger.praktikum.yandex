import Block from "core/Block"

import "./button.scss"

interface ButtonProps {
  text: string
  className: string
  onClick: () => void
}

export class Button extends Block {
  constructor({ text, className, onClick }: ButtonProps) {
    super({ text, className, events: { click: onClick } })
  }

  protected render(): string {
    // language=hbs
    return `
        <button class="{{className}}" type="button">{{text}}</button>
    `
  }
}
