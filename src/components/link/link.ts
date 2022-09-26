import Block from 'core/Block';

import './link.scss';

interface LinkProps {
  text: string;
  className:string;
  onClick: () => void;
}

export class Link extends Block {
  constructor({text,className, onClick}: LinkProps) {
    super({text,className, events: {click: onClick}});
  }

  protected render(): string {
    // language=hbs
    return `
        <button class="{{className}}" type="button">{{text}}</button>
    `;
  }
}
