import { Block } from "core"
import "./contactLink.scss"
import { ROUTES } from "constants/routes"

interface ContactLinkProps {
  text: string
}

export class ContactLink extends Block {
  static componentName = "ContactLink"
  constructor(props: ContactLinkProps) {
    super({
      ...props,
      events: {
        click: () => {
          window.router.go(ROUTES.Profile)
        },
      },
    })
  }
  protected render(): string {
    return `
        <a class="contacts__link">{{text}}</a>
      `
  }
}
