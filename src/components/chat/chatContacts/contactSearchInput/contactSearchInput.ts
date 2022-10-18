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
}

export class ContactSearchInput extends Block<ContactSearchInputProps> {
  static componentName = "ContactSearchInput"
  constructor(props: ContactSearchInputProps) {
    super({
      ...props,
      events: {
        input: props.onInput,
      },
    })
  }
  protected render(): string {
    // language=hbs
    return `
    <div class="contact-search-input">
        <input type="text" value="{{searchValue}}"  placeholder="&#xF002; Поиск" class="search-input">
    </div>
    `
  }
}
