import { Block } from "core"
import "./contactLink.scss"
import { router } from "../../../../index"
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
          router.go(ROUTES.Profile)
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
