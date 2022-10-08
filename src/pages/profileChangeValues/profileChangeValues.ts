import { Block } from "core"
import * as avatar from "../../assets/defaultAvatarBig.png"
import "../profile/profile.scss"
import ProfilePage from "pages/profile"
import { validateForm } from "helpers/validateForm"
import { router } from "../../index"
import { ROUTES } from "constants/routes"

export class ProfileChangeValuesPage extends Block {
  constructor() {
    super()
    this.setProps({
      emailValue: "",
      loginValue: "",
      firstNameValue: "",
      secondNameValue: "",
      phoneValue: "",
      displayNameValue: "",
      redirectBack: () => {
        router.back()
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
        const arrayOfInputsName = ["email", "login", "first_name", "second_name", "phone", "display_name"]

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
          this.setProps({
            emailValue: arrayOfHtmlElements[0].element.value,
            loginValue: arrayOfHtmlElements[1].element.value,
            firstNameValue: arrayOfHtmlElements[2].element.value,
            secondNameValue: arrayOfHtmlElements[3].element.value,
            phoneValue: arrayOfHtmlElements[4].element.value,
            displayNameValue: arrayOfHtmlElements[5].element.value,
          })
          console.log(
            "Форма готова к отправке, данные: ",
            arrayOfHtmlElements.map((item: { name: string; element: HTMLInputElement }) => {
              return { [item.name]: item.element.value }
            }),
          )
          router.go(ROUTES.Profile)
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
            {{!------- ПОЧТА -------}}
                <div class="profile__form__field">
                <label class="profile__form__field__label">Почта</label>
                {{{ControlledInput 
                    onInput=onInput
                    type="text" 
                    name="email" 
                    value=emailValue
                    inputClassName="profile__input" 
                    divClassName="profile__input__div" 
                    errorClassName="profile__error"
                    placeholder="rrdreaming@yandex.ru"
                    ref="emailInputRef"
                    errorRef="emailErrorRef"
                }}}
                </div>

            {{!------- ЛОГИН -------}}
                <div class="profile__form__field">
                <label class="profile__form__field__label">Логин</label>
                {{{ControlledInput 
                    onInput=onInput
                    type="text" 
                    name="login" 
                    value=loginValue
                    inputClassName="profile__input" 
                    divClassName="profile__input__div" 
                    errorClassName="profile__error"
                    placeholder="daniilbabakin"
                    ref="loginInputRef"
                    errorRef="loginErrorRef"
                }}}
                </div>

            {{!------- ИМЯ -------}}
                <div class="profile__form__field">
                <label class="profile__form__field__label">Имя</label>
                {{{ControlledInput 
                    onInput=onInput
                    type="text" 
                    name="first_name" 
                    value=firstNameValue
                    inputClassName="profile__input" 
                    divClassName="profile__input__div" 
                    errorClassName="profile__error"
                    placeholder="Даниил"
                    ref="first_nameInputRef"
                    errorRef="first_nameErrorRef"
                }}}
                </div>

            {{!------- ФАМИЛИЯ -------}}
                <div class="profile__form__field">
                <label class="profile__form__field__label">Фамилия</label>
                {{{ControlledInput 
                    onInput=onInput
                    type="text" 
                    name="second_name" 
                    value=secondNameValue
                    inputClassName="profile__input" 
                    divClassName="profile__input__div" 
                    errorClassName="profile__error"
                    placeholder="Бабакин"
                    ref="second_nameInputRef"
                    errorRef="second_nameErrorRef"
                }}}
                </div>
            
            {{!------- ИМЯ В ЧАТЕ -------}}
                <div class="profile__form__field">
                <label class="profile__form__field__label">Имя в чате</label>
                {{{ControlledInput 
                    onInput=onInput
                    type="text" 
                    name="display_name" 
                    value=displayNameValue
                    inputClassName="profile__input" 
                    divClassName="profile__input__div" 
                    errorClassName="profile__error"
                    placeholder="Даниил"
                    ref="display_nameInputRef"
                    errorRef="display_nameErrorRef"
                }}}
                </div>

            {{!------- ТЕЛЕФОН -------}}
                <div class="profile__form__field no-border">
                <label class="profile__form__field__label">Телефон</label>
                {{{ControlledInput 
                    onInput=onInput
                    type="text" 
                    name="phone" 
                    value=phoneValue
                    inputClassName="profile__input default-font" 
                    divClassName="profile__input__div" 
                    errorClassName="profile__error"
                    placeholder="+7 (916) 563 19 58"
                    ref="phoneInputRef"
                    errorRef="phoneErrorRef"
                }}}
                </div>
            {{!------- LINK BACK TO PROFILE -------}}
                {{{Button className="back-to-chats" onClick=redirectBack}}}
                {{{Button text="Сохранить" className="custom-button blue mt75" onClick=onSubmit}}}
            </form>

            </div>
        </main>
    `
  }
}
