import { renderDOM } from 'core';
import Block from '../../core/Block';
import './notFound.scss'
export class NotFound extends Block {
  render() {
    // language=hbs
    return `
    <main class="error">
      <div class="error__container">
          <h1 class="error__status">404</h1>
          <h2 class="error__message">Не туда попали</h2>
          <a href="#">Назад к чатам</a>
      </div>
    </main>
    `;
  }
}
