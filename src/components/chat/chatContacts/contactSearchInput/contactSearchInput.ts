import Block from "core/Block"

import "./contactSearchInput.scss"

export class ContactSearchInput extends Block {
  constructor() {
    super()
  }

  protected render(): string {
    // language=hbs
    return `
    <div>
        <input type="text" placeholder="&#xF002; Поиск" class="search-input">
    </div>

    `
  }
}
