import Block from "core/Block"
import { withChatMessages } from "helpers/withChatMessages"
import { withCurrentChat } from "helpers/withCurrentChat"
import { ChatMessageType } from "types/ChatMessage"

import "./chatMainBlock.scss"

type ChatMainBlockProps = {
  chatMessages: ChatMessageType[]
}

export class ChatMainBlock extends Block<ChatMainBlockProps> {
  static componentName = "ChatMainBlock"
  
  constructor(props: ChatMainBlockProps) {
    super(props)
  }

  protected render(): string {
    // language=hbs
    return `
        <div class="messages__main-block"> 
            {{#each chatMessages}}
                {{#if this.whenDate}}
                   <span class="when-date">{{this.whenDate}}</span>
                {{/if}}
                <div class="message {{#ifNotMyMessage this.user_id}}friend__message{{/ifNotMyMessage}}">
                    <p class="message__text">{{this.content}}</p>
                    <time class="message__time">{{this.time}}</time>
                </div>
            {{/each}}
        </div>
    `
  }
}
