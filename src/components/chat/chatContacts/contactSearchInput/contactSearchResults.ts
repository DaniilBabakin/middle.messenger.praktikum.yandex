import { Store } from "core"
import Block from "core/Block"
import { withContacts, withStore } from "helpers"
import * as avatar from "../../../../assets/defaultAvatar.png"
import "./contactSearchInput.scss"

type ContactSearchResultsProps = {
  contacts: any
}

class ContactSearchResults extends Block<ContactSearchResultsProps> {
  static componentName = "ContactSearchResults"
  constructor(props: ContactSearchResultsProps) {
    super(props)
    console.log("CONTACTS", this.props.contacts)
  }
  protected render(): string {
    // language=hbs
    return `
    <div class="search-results">
        {{#if contacts}}
            {{#each contacts }}
                <div class="search-results__item">
                    <img src=https://ya-praktikum.tech/api/v2/resources{{this.avatar}} onerror="this.onerror=null;this.src='${avatar}';" class="search-results__item__image" data-label="avatar" alt="Моя фотография"/>
                    <span>{{this.login}}</span>
                </div>
            {{/each}}
        {{/if}}
    </div>

    `
  }
}

const ConnectedContactSearchResults = withContacts(ContactSearchResults)
export { ConnectedContactSearchResults as ContactSearchResults }
