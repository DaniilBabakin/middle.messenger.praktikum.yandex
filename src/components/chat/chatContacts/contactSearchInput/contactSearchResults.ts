import { userAPI } from "api/userAPI"
import { Store } from "core"
import Block from "core/Block"
import { withStore } from "helpers"
import { searchUsers } from "service/user"
import * as avatar from '../../../../assets/defaultAvatar.png'  
import "./contactSearchInput.scss"

type ContactSearchResultsProps = {
  store: Store<AppState>
}

class ContactSearchResults extends Block<ContactSearchResultsProps> {
  static componentName = "ContactSearchResults"
  constructor(props: ContactSearchResultsProps) {
    super(props)
    this.setProps(props)
    console.log(this, this.props.store.dispatch)
  }
  protected render(): string {
    // language=hbs
    return `
    <div class="search-results">
        {{#if store.contacts}}
            {{#each store.contacts }}
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
function mapUserToProps(state: any) {
  return {
    userSearchResult: state!.userSearchResult,
  }
}
const ConnectedContactSearchResults = withStore(ContactSearchResults, mapUserToProps)
export { ConnectedContactSearchResults as ContactSearchResults }
