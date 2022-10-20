import Block from "core/Block"

import "./input.scss"

interface InputProps {
  onInput?: () => void
  onFocus?: () => void
  onBlur?: () => void
  type?: "text" | "password" | "email"
  placeholder?: string
  value?: string
  name?: string
  inputClassName?: string
  autofocus?: boolean
}

export class Input extends Block {
  static componentName = "Input"
  constructor({ onInput, onFocus, onBlur, ...props }: InputProps) {
    super({ ...props, events: { input: onInput, focus: onFocus, blur: onBlur } })
  }

  protected render(): string {
    // language=hbs
    return `
        <input name="{{name}}" {{#if autofocus}}tabindex="-1"{{/if}} autocomplete="off" value="{{value}}" class="{{inputClassName}}" type="{{type}}" placeholder="{{placeholder}}">
    `
  }
}
