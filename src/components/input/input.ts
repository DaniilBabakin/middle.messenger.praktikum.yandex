import Block from '../../core/Block'

import './input.scss'

interface InputProps {
  onInput?: () => void
  onFocus?: () => void
  onBlur?: () => void
  type?: 'text' | 'password' | 'email'
  placeholder?: string
  value?: string
  name?: string
  inputClassName?: string
}

export class Input extends Block {
  constructor({ onInput, onFocus, onBlur, ...props }: InputProps) {
      super({ ...props, events: { input: onInput, focus: onFocus, blur: onBlur } })
  }

  protected render(): string {
    // language=hbs
    return `
        <input name="{{name}}" autocomplete="off" value="{{value}}" class="{{inputClassName}}" type="{{type}}" placeholder="{{placeholder}}">
    `
  }
}
