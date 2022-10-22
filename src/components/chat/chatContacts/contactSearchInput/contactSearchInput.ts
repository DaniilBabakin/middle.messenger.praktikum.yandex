import { userAPI } from "api/userAPI"
import { Store } from "core"
import Block from "core/Block"
import { withStore } from "helpers"
import { searchUsers } from "service/user"

import "./contactSearchInput.scss"

type ContactSearchInputProps = {
  store: Store<AppState>
  events: Record<string, any>
  searchValue: string
  onInput: () => void
  onFocus: () => void
  onBlur: () => void
}

export class ContactSearchInput extends Block<ContactSearchInputProps> {
  static componentName = "ContactSearchInput"
  constructor(props: ContactSearchInputProps) {
    super(props)
  }

  protected render(): string {
    // language=hbs
    return `
    <div class="contact-search-input">
        <input type="text" value="{{searchValue}}" placeholder="&#xF002; Поиск" class="search-input">
        {{{ControlledInput 
            onInput=onInput 
            onFocus=onFocus
            onBlur=onBlur
            type="text" 
            value=searchValue
            inputClassName="search-input"
            divClassName="short"
            placeholder="&#xF002; Поиск"
            ref="searchResultsInputRef"
          }}}
        {{{ContactSearchResults}}}
    </div>
    `
  }
}
