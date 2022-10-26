import Block from "core/Block"
import { ChatMessageType } from "types/ChatMessage"

import "./chatMainBlock.scss"

type ChatMainBlockProps = {
  chatMessages: ChatMessageType[]
  isLoading: boolean
}

export class ChatMainBlock extends Block<ChatMainBlockProps> {
  static componentName = "ChatMainBlock"

  constructor(props: ChatMainBlockProps) {
    super(props)
    console.log("IS LOADING?", this.props.isLoading)
  }

  protected render(): string {
    // language=hbs
    return `
        <div class="messages__main-block"> 
        {{#if isLoading}}
            {{{Loader}}}
        {{else}}
            {{#if chatMessages}}
                {{#each chatMessages}}
                    {{#if this.whenDate}}
                    <span class="when-date">{{this.whenDate}}</span>
                    {{/if}}
                    <div class="message {{#ifNotMyMessage this.user_id}}friend__message{{/ifNotMyMessage}}">
                        <p class="message__text">{{this.content}}</p>
                        <time class="message__time">{{this.customTime}}</time>
                    </div>
                {{/each}}
            {{/if}}
        {{/if}}
        
            
        </div>
    `
  }
}
