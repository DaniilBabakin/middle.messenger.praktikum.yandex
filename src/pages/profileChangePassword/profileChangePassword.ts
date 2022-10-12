import { Block } from "core"
import * as avatar from "../../assets/defaultAvatarBig.png"
import "../profile/profile.scss"
import LoginPage from "pages/login"
import ProfilePage from "pages/profile"
import { validateForm } from "helpers/validateForm"
import { router } from "../../index"
import { ROUTES } from "constants/routes"
import GlobalStorage from "service/GlobalStorage"
import { UserType } from "types/User"
import { authAPI } from "service/api/authAPI"
import { userAPI } from "service/api/userAPI"

export class ProfileChangePasswordPage extends Block {
  constructor() {
    super()

    this.setProps({
      values: {
        oldPasswordValue: "",
        newPasswordValue: "",
        check_passwordValue: "",
      },
      onInput: (e: FocusEvent) => {
        const inputEl = e.target as HTMLInputElement
        const inputRef = inputEl.name + "InputRef"
        const errorRef = inputEl.name + "ErrorRef"

        const errorMessage = validateForm([{ type: inputEl.name, value: String(inputEl.value) }])

        this.refs[inputRef].refs[errorRef].setProps({
          text: errorMessage.text,
        })
      },
      onSubmit: () => {
        //Названия элементов для последующего маппинга в { name:имя(отсюда как раз), element: элемент }
        const arrayOfInputsName = ["oldPassword", "newPassword", "check_password"]

        //Сам маппинг
        const arrayOfHtmlElements: { name: string; element: HTMLInputElement }[] = arrayOfInputsName.map(
          (name: string) => {
            return { name: name, element: this.element?.querySelector(`input[name="${name}"]`) as HTMLInputElement }
          },
        )
        const NamesToArrayOfHTMLElements = (names: string[]) => {
          return names.map((name: string) => {
            return { name: name, element: this.element?.querySelector(`input[name="${name}"]`) as HTMLInputElement }
          })
        }
        NamesToArrayOfHTMLElements.bind(this)
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
            this.refs["check_passwordInputRef"].refs["check_passwordErrorRef"].setProps({
              text: "Пароли не совпадают",
            })
          } else {
            this.setProps({
              oldPasswordValue: arrayOfHtmlElements[0].element.value,
              newPasswordValue: arrayOfHtmlElements[1].element.value,
              check_passwordValue: arrayOfHtmlElements[2].element.value,
            })

            const formData = arrayOfHtmlElements
              .filter(({name}) => name !== "check_password")
              .reduce<any>(
                (acc, item: { name: string; element: HTMLInputElement }) =>
                  Object.assign(acc, { [item.name]: item.element.value }),
                {},
              )
            console.log("Форма готова к отправке, данные: ", formData)

            userAPI.changePassword(formData).then((res: any) => {
              if (!res) {
                this.refs['oldPasswordInputRef'].refs['oldPasswordErrorRef'].setProps({
                    text:'Пароль не совпадает'
                })
                return
              }
              router.go("/profile")
            })
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
                    name="check_password" 
                    value=check_passwordValue
                    inputClassName="profile__input" 
                    divClassName="profile__input__div" 
                    errorClassName="profile__error"
                    placeholder="Введите старый пароль"
                    ref="check_passwordInputRef"
                    errorRef="check_passwordErrorRef"
                }}}
                </div>
            {{!------- LINK BACK TO PROFILE -------}}
                {{{Button className="back-to-chats" onClick=redirectBack}}}
                {{{Button text="Сохранить" className="custom-button blue mt220" onClick=onSubmit}}}
            </form>

            </div>
        </main>
    `
  }
}
