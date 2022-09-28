import { Block } from "core"
import * as avatar from "../../assets/defaultAvatarBig.png"
import "../profile/profile.scss"
import MainPage from "pages/main"
import LoginPage from "pages/login"
import ProfilePage from "pages/profile"
import { validateForm } from "helpers/validateForm"

export class ProfileChangePasswordPage extends Block {
  constructor() {
    super()
    this.setProps({
      oldPasswordValue: "",
      newPasswordValue: "",
      repeatNewPasswordValue: "",
      redirectToLogin: () => {
        window.currentPage.page = LoginPage
      },
      redirectToProfile: () => {
        window.currentPage.page = ProfilePage
      },
      onInput: (e: FocusEvent) => {
        const inputEl = e.target as HTMLInputElement
        const inputRef = inputEl.name + "InputRef" //Чтобы найти нужный объект в this.refs. Получается, например loginInputRef
        const errorRef = inputEl.name + "ErrorRef" //Чтобы найти нужный объект в this.refs[inputRef] Получается, например loginErrorRef

        const errorMessage = validateForm([{ type: inputEl.name, value: String(inputEl.value) }]) //Две константы выше сделаны как раз для того, чтобы не нужно было через условия отслеживать, какой тип отправлять. Результат функции - {text:сообщение об ошибке, inputName:имя элемента}

        this.refs[inputRef].refs[errorRef].setProps({
          text: errorMessage.text,
        })
      },
      onSubmit: () => {
        //Названия элементов для последующего маппинга в { name:имя(отсюда как раз), element: элемент }
        const arrayOfInputsName = ["oldPassword", "newPassword", "repeatNewPassword"]

        //Сам маппинг
        const arrayOfHtmlElements: { name: string; element: HTMLInputElement }[] = arrayOfInputsName.map(
          (name: string) => {
            return { name: name, element: this.element?.querySelector(`input[name="${name}"]`) as HTMLInputElement }
          },
        )

        //Проверяем наличие ошибок(Маппинг помогает упростить запрос)
        const errorMessage = validateForm(
          arrayOfHtmlElements.map((item: { name: string; element: HTMLInputElement }) => {
            return { type: item.element.name, value: item.element.value }
          }),
        )

        //Если ошибка есть - находим нужный элемент в refs, далее реф его ошибки, далее меняем текст на текст ошибки
        if (errorMessage.text) {
          this.refs[errorMessage.inputName].refs[errorMessage.inputName.replace("Input", "Error")].setProps({
            text: errorMessage.text,
          })
        } else {
          if (arrayOfHtmlElements[1].element.value !== arrayOfHtmlElements[2].element.value) {
            this.refs["repeatNewPasswordInputRef"].refs["repeatNewPasswordErrorRef"].setProps({
              text: "Пароли не совпадают",
            })
          } else {
            this.setProps({
              oldPasswordValue: arrayOfHtmlElements[0].element.value,
              newPasswordValue: arrayOfHtmlElements[1].element.value,
              repeatNewPasswordValue: arrayOfHtmlElements[2].element.value,
            })
            console.log(
              "Форма готова к отправке, данные: ",
              arrayOfHtmlElements.map((item: { name: string; element: HTMLInputElement }) => {
                return { [item.name]: item.element.value }
              }),
            )
            window.currentPage.page = ProfilePage
          }
        }
      },
    })
  }

  protected render(): string {
    return `
        <main class="profile">
            <div class="profile__container">
            <div>
                <img src="${avatar}" class="profile__container_image" alt="Моя фотография"/>
                <h1 class="profile__container_title">Даня</h1>
            </div>
            <form class="profile__form">
            {{!------- СТАРЫЙ ПАРОЛЬ -------}}
                <div class="profile__form__field">
                <label class="profile__form__field__label">Старый пароль</label>
                {{{ControlledInput 
                    onInput=onInput
                    type="password" 
                    name="oldPassword" 
                    value=oldPasswordValue
                    inputClassName="profile__input" 
                    divClassName="profile__input__div" 
                    errorClassName="profile__error"
                    placeholder="Введите старый пароль"
                    ref="oldPasswordInputRef"
                    errorRef="oldPasswordErrorRef"
                }}}
                </div>

            {{!------- НОВЫЙ ПАРОЛЬ -------}}
                <div class="profile__form__field">
                <label class="profile__form__field__label">Новый пароль</label>
                {{{ControlledInput 
                    onInput=onInput
                    type="password" 
                    name="newPassword" 
                    value=newPasswordValue
                    inputClassName="profile__input" 
                    divClassName="profile__input__div" 
                    errorClassName="profile__error"
                    placeholder="Введите старый пароль"
                    ref="newPasswordInputRef"
                    errorRef="newPasswordErrorRef"
                }}}
                </div>

            {{!------- ПОВТОРИТЕ НОВЫЙ ПАРОЛЬ -------}}
                <div class="profile__form__field">
                <label class="profile__form__field__label">Повторите новый пароль</label>
                {{{ControlledInput 
                    onInput=onInput
                    type="password" 
                    name="repeatNewPassword" 
                    value=repeatNewPasswordValue
                    inputClassName="profile__input" 
                    divClassName="profile__input__div" 
                    errorClassName="profile__error"
                    placeholder="Введите старый пароль"
                    ref="repeatNewPasswordInputRef"
                    errorRef="repeatNewPasswordErrorRef"
                }}}
                </div>
            {{!------- LINK BACK TO PROFILE -------}}
                {{{Button className="back-to-chats" onClick=redirectToProfile}}}
                {{{Button text="Сохранить" className="custom-button blue mt220" onClick=onSubmit}}}
            </form>

            </div>
        </main>
    `
  }
}
