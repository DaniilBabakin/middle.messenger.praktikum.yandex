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
  onBlur: () => void
}

export class ContactSearchInput extends Block<ContactSearchInputProps> {
  static componentName = "ContactSearchInput"
  constructor(props: ContactSearchInputProps) {
    super({
      ...props,
      events: {
        onBlur: props.onBlur,
        input: (e: FocusEvent) => {
          const inputEl = e.target as HTMLInputElement
          window.store.dispatch(searchUsers, { login: inputEl.value })
        },
        focus: () => {
          console.log("123")
          window.store.dispatch({ userSearchResult: null })
        },
      },
    })
    this.setProps({
      ...props,
      searchValue: "",
    })
    console.log(this.props)
  }
  protected render(): string {
    // language=hbs
    return `
    <div class="contact-search-input">
        <input type="text" value="{{searchValue}}"  placeholder="&#xF002; Поиск" class="search-input">
        {{{Input onBlur=onBlur inputClassName="search-input" placeholder="&#xF002; Поиск"}}}
        {{{ContactSearchResults}}}
    </div>

    `
  }
}
function mapUserToProps(state: any) {
  return {
    userSearchResult: state!.userSearchResult,
  }
}
