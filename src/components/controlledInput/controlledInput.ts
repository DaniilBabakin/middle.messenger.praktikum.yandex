import { validateForm, ValidateType } from 'helpers/validateForm'
import Block from 'core/Block'

import './controlledInput.scss'

interface ControlledInputProps {
  onInput?: () => void
  onFocus?: () => void
  onBlur?: () => void
  type?: 'text' | 'password' | 'email'
  placeholder?: string
  value: string
  error?: string
  name?: string
  inputClassName?: string
  divClassName?: string
  errorRef?: string
}

export class ControlledInput extends Block {
  constructor(props: ControlledInputProps) {
    super({
      ...props,
      onBlur: (e: FocusEvent) => {
        const inputEl = e.target as HTMLInputElement
        const errorMessage = validateForm([{ type: inputEl.name, value: inputEl.value }])
        const errorReference = props.errorRef as string
        this.refs[errorReference].setProps({
          text: errorMessage.text,
        })
      },
    })
  }

  protected render(): string {
    // language=hbs
    return `
      <div class="input {{divClassName}}">
        {{{Input 
            name="{{name}}" 
            type="{{type}}"
            inputClassName="{{inputClassName}}"
            placeholder="{{placeholder}}" 
            onInput=onInput 
            onFocus=onFocus 
            onBlur=onBlur 
        }}}
        {{{Error ref=errorRef text=error}}}
      </div>
    `
  }
}
