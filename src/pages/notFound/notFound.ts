import { Block } from "core"
import MainPage from "pages/main"
import "../serverError/serverError.scss"

export class NotFoundPage extends Block {
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
                    <h1 class="error-page__status">404</h1>
                    <h2 class="error-page__message">Не туда попали</h2>
                    {{{Button text="Назад к чатам" className="error-page__button" onClick=onClick}}}
                </div>
            </main>
         `
  }
}
