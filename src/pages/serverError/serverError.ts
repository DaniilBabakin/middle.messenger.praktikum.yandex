import { Block } from "core"
import MainPage from "pages/main"
import "./serverError.scss"
export class ServerErrorPage extends Block {
  constructor() {
    super()
    this.setProps({
      onClick: () => {
        window.currentPage.page = MainPage
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
