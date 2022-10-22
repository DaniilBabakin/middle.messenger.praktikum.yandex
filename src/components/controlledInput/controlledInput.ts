import { validateForm, ValidateType } from "helpers/validateForm"
import Block from "core/Block"

import "./controlledInput.scss"

interface ControlledInputProps {
  onInput?: () => void
  onFocus?: () => void
  onBlur?: () => void
  type?: "text" | "password" | "email"
  placeholder?: string
  value: string
  error?: string
  name?: string
  inputClassName?: string
  divClassName?: string
  errorClassName?: string
  errorRef?: string
  autofocus?: boolean
}

export class ControlledInput extends Block {
  static componentName = "ControlledInput"
  constructor(props: ControlledInputProps) {
    super({
      ...props,
    })
    if (!props.onBlur) {
      this.setProps({
        onBlur: (e: FocusEvent) => {
          const inputEl = e.target as HTMLInputElement
          const errorMessage = validateForm([{ type: inputEl.name, value: inputEl.value }])
          const errorReference = props.errorRef as string
          this.refs[errorReference].setProps({
            text: errorMessage.text,
          })
          setTimeout(() => {
            this.refs[errorReference].setProps({
              text: "",
            })
          }, 5000)
        },
      })
    }
  }

  protected render(): string {
    // language=hbs
    return `
      <div class="input {{divClassName}}">
        {{{Input 
            name="{{name}}" 
            type="{{type}}"
            autofocus=autofocus
            inputClassName="{{inputClassName}}"
            placeholder="{{placeholder}}" 
            onInput=onInput 
            onFocus=onFocus 
            onBlur=onBlur 
            value=value
        }}}
        {{{Error className=errorClassName ref=errorRef text=error}}}
      </div>
    `
  }
}
