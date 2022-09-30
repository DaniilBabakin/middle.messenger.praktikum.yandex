import { Block } from "core"
import "./contactLink.scss"
import ProfilePage from "pages/profile"

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
          window.currentPage.page = ProfilePage
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
