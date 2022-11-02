import { ROUTES } from "constants/routes"
import { Block } from "core"
import "./serverError.scss"
export class ServerErrorPage extends Block {
  constructor() {
    super()
    this.setProps({
      onClick: () => {
        window.router.go(ROUTES.Chat)
      },
    })
  }
  protected render(): string {
    return `
            <main class="error-page">
                <div class="error-page__container">
                    <h1 class="error-page__status">500</h1>
                    <h2 class="error-page__message">Стараемся все исправить</h2>
                    {{{Button text="Назад к чатам" className="error-page__button" onClick=onClick}}}
                </div>
            </main>
         `
  }
}
