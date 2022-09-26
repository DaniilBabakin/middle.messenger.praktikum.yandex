import Block from 'core/Block';

import './title.scss';

interface TitleProps {
  title: string;
  subtitle: string;
}

export class Title extends Block {
  constructor({title,subtitle}: TitleProps) {
    super({title,subtitle});
  }

  protected render(): string {
    // language=hbs
    return `
    <div class="greetings">
        <h1 class="greetings-title">{{title}}</h1>
        <h2 class="greetings-subtitle">{{subtitle}}</h2>
    </div
    `
  }
}
