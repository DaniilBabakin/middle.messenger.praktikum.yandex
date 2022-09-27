import Block from 'core/Block'

import './chatFooter.scss'

export class ChatFooter extends Block {
  constructor() {
    super()
  }

  protected render(): string {
    // language=hbs
    return `
        <footer class="messages__footer">
            <button class="messages__footer__import-files"></button>
            <input type="text" name='message' placeholder="Сообщение" class="messages__footer__input"/>
            <button class="messages__footer__send-message"></button>
        </footer>
    `
  }
}
