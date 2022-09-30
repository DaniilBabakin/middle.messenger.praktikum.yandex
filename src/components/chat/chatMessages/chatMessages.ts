import Block from "core/Block"

import "./chatMessages.scss"

export class ChatMessages extends Block {
  static componentName = "ChatMessages"
  constructor() {
    super()
  }

  protected render(): string {
    // language=hbs
    return `
        <div class="messages">
            {{{ChatHeader}}}
            {{{ChatMainBlock}}}
            {{{ChatFooter}}}
        </div>
    `
  }
}
