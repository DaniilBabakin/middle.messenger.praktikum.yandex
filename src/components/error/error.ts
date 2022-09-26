import Block from '../../core/Block';

import './error.scss';

interface ErrorProps {
  text?: string;
}

export class Error extends Block {
  protected render(): string {
    // language=hbs
    return `
      <div class="{{#if text}}active{{/if}} error">{{#if text}}{{text}}{{/if}}</div>
    `
  }
}
