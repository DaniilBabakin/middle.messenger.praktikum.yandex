import Block from "core/Block"
import "./signUp.scss"
import LoginPage from "pages/login"
import { validateForm, ValidateType } from "helpers/validateForm"
import MainPage from "pages/main"

export class SignUpPage extends Block {
  constructor() {
    super()

    this.setProps({
      emailValue: "",
      loginValue: "",
      passwordValue: "",
      firstNameValue: "",
      secondNameValue: "",
      phoneValue: "",
      checkPasswordValue: "",
      onInput: (e: FocusEvent) => {
        const inputEl = e.target as HTMLInputElement
        const inputRef = inputEl.name + "InputRef" //Чтобы найти нужный объект в this.refs. Получается, например loginInputRef
        const errorRef = inputEl.name + "ErrorRef" //Чтобы найти нужный объект в this.refs[inputRef] Получается, например loginErrorRef

        const errorMessage = validateForm([{ type: inputEl.name, value: String(inputEl.value) }]) //Две константы выше сделаны как раз для того, чтобы не нужно было через условия отслеживать, какой тип отправлять. Результат функции - {text:сообщение об ошибке, inputName:имя элемента}

        this.refs[inputRef].refs[errorRef].setProps({
          text: errorMessage.text,
        })
      },
      onRedirectToLogin: () => {
        window.currentPage.page = LoginPage
      },
      onSubmit: () => {
        //Названия элементов для последующего маппинга в { name:имя(отсюда как раз), element: элемент }
        const arrayOfInputsName = ["email", "login", "first_name", "second_name", "phone", "password", "check_password"]

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
          //Если поля с паролями не совпадают, выдаем ошибку , если все ок - отправляем форму
          if (arrayOfHtmlElements[5].element.value !== arrayOfHtmlElements[6].element.value) {
            this.refs["check_passwordInputRef"].refs["check_passwordErrorRef"].setProps({
              text: "Пароли не совпадают",
            })
          } else {
            this.setProps({
              emailValue: arrayOfHtmlElements[0].element.value,
              loginValue: arrayOfHtmlElements[1].element.value,
              firstNameValue: arrayOfHtmlElements[2].element.value,
              secondNameValue: arrayOfHtmlElements[3].element.value,
              phoneValue: arrayOfHtmlElements[4].element.value,
              passwordValue: arrayOfHtmlElements[5].element.value,
              checkPasswordValue: arrayOfHtmlElements[6].element.value,
            })
            console.log(
              "Форма готова к отправке, данные: ",
              arrayOfHtmlElements.map((item: { name: string; element: HTMLInputElement }) => {
                return { [item.name]: item.element.value }
              }),
            )
            window.currentPage.page = MainPage
          }
        }
      },
    })
  }
  render() {
    // language=hbs
    return `
    <main class="signUp">
      <div class="signUp__container">
        {{{Title title="Пора познакомиться!" subtitle="Будем рады видеть тебя в нашем приложении" }}}
          <form class="signUp__form">
          {{{ControlledInput 
            onInput=onInput 
            onFocus=onFocus
            type="text" 
            name="email" 
            value=emailValue
            inputClassName="custom-input short"
            divClassName="short first-short"
            placeholder="Почта"
            ref="emailInputRef"
            errorRef="emailErrorRef"
          }}}
          {{{ControlledInput 
            onInput=onInput 
            onFocus=onFocus
            type="text" 
            name="login"
            value=loginValue
            inputClassName="custom-input short"
            divClassName="short"
            placeholder="Логин"
            ref="loginInputRef"
            errorRef="loginErrorRef"
          }}}
          {{{ControlledInput 
            onInput=onInput 
            onFocus=onFocus
            type="text" 
            name="first_name"
            value=firstNameValue
            inputClassName="custom-input short"
            divClassName="short"
            placeholder="Имя"
            ref="first_nameInputRef"
            errorRef="first_nameErrorRef"
          }}}
          {{{ControlledInput 
            onInput=onInput 
            onFocus=onFocus
            type="text" 
            name="second_name"
            value=secondNameValue
            inputClassName="custom-input short"
            divClassName="short"
            placeholder="Фамилия"
            ref="second_nameInputRef"
            errorRef="second_nameErrorRef"
          }}}
          {{{ControlledInput 
            onInput=onInput 
            onFocus=onFocus
            type="text" 
            name="phone"
            value=phoneValue
            inputClassName="custom-input short"
            divClassName="short"
            placeholder="Телефон"
            ref="phoneInputRef"
            errorRef="phoneErrorRef"
          }}}
          {{{ControlledInput 
            onInput=onInput 
            onFocus=onFocus
            type="password" 
            name="password"
            value=passwordValue
            inputClassName="custom-input short"
            divClassName="short"
            placeholder="Пароль"
            ref="passwordInputRef"
            errorRef="passwordErrorRef"
          }}}
          {{{ControlledInput 
            onInput=onInput 
            onFocus=onFocus
            type="password" 
            name="check_password"
            value=checkPasswordValue 
            inputClassName="custom-input short"
            divClassName="short last-short"
            placeholder="Повторите пароль"
            ref="check_passwordInputRef"
            errorRef="check_passwordErrorRef"
          }}}
            {{{Button text="Зарегистрироваться" className="custom-button" onClick=onSubmit}}}
          </form>
          {{{Button text="Войти" className="redirect-button" onClick=onRedirectToLogin}}}

      </div>
    </main>
    `
  }
}
