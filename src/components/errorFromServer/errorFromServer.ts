import { Block } from "core"
import "./errorFromServer.scss"

interface ErrorFromServerProps {
  text?: string
  className?: string
}

export class ErrorFromServer extends Block<ErrorFromServerProps> {
  static componentName = "ErrorFromServer"
  constructor(props: ErrorFromServerProps) {
    super(props)
  }
  protected render(): string {
    // language=hbs
    return `
      <div class="error-from-server {{className}}">{{#if text}}{{text}}{{/if}}</div>
    `
  }
}
