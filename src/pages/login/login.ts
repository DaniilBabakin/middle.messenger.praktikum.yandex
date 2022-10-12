import { SignUpPage } from "../signUp/signUp"
import { MainPage } from "../main/main"
import Block from "core/Block"
import "./login.scss"
import { validateForm, ValidateType } from "helpers/validateForm"
import { router } from "../../index"
import { authAPI } from "service/api/authAPI"
import GlobalStorage from "service/GlobalStorage"
import { ROUTES } from "constants/routes"

export class LoginPage extends Block {
  constructor() {
    super()

    this.setProps({
      loginValue: "",
      passwordValue: "",
      onInput: (e: FocusEvent) => {
        const inputEl = e.target as HTMLInputElement
        const inputRef = inputEl.name + "InputRef"
        const errorRef = inputEl.name + "ErrorRef"

        const errorMessage = validateForm([{ type: inputEl.name, value: inputEl.value }])

        this.refs[inputRef].refs[errorRef].setProps({
          text: errorMessage.text,
        })
      },
      onRedirectToSignUp: () => {
        router.go(ROUTES.SignUp)
      },
      onSubmit: () => {
        const loginEl = this.element?.querySelector("input[name='login']") as HTMLInputElement
        const passwordEl = this.element?.querySelector("input[name='password']") as HTMLInputElement

        const errorMessage = validateForm([
          { type: ValidateType.Login, value: loginEl.value },
          { type: ValidateType.Password, value: passwordEl.value },
        ])

        if (errorMessage.text) {
          this.refs[errorMessage.inputName].refs[errorMessage.inputName.replace("Input", "Error")].setProps({
            text: errorMessage.text,
          })
        } else {
          this.setProps({
            loginValue: loginEl.value,
            passwordValue: passwordEl.value,
          })

          const formData = { login: loginEl.value, password: passwordEl.value }
          console.log("Форма готова к отправке, данные: ", formData)

          authAPI.signIn(formData).then((res) => {
            if (!res) {
              this.refs['passwordInputRef'].refs['passwordErrorRef'].setProps({
                text:"Логин или пароль неверны"
              })
            }
            this.initUser()
          })
        }
      },
    })
  }

  private _initUser() {
    authAPI.getUser().then((user) => {
      GlobalStorage.setUser(user)
      router.go("/messenger")
    })
  }

  initUser() {
    this._initUser()
  }

  render() {
    // language=hbs
    return `
    <main class="login">
      <div class="login__container">
      {{{Title title="Привет!" subtitle="Давно тебя не видели!" }}}
          <form class="login__form">
          {{{ControlledInput 
            onInput=onInput 
            onFocus=onFocus
            type="text" 
            name="login"
            value=loginValue
            inputClassName="custom-input"
            divClassName="first"
            placeholder="Ваш логин"
            ref="loginInputRef"
            errorRef="loginErrorRef"
          }}}
          {{{ControlledInput 
            onInput=onInput 
            onFocus=onFocus
            type="text" 
            name="password" 
            value=passwordValue
            inputClassName="custom-input"
            divClassName="last"
            placeholder="Пароль"
            ref="passwordInputRef"
            errorRef="passwordErrorRef"
          }}}
            {{{Button text="Войти" className="custom-button" onClick=onSubmit }}}

          </form>
          {{{Button text="Нет аккаунта?" className="redirect-button" onClick=onRedirectToSignUp}}}
      </div>
    </main>
    `
  }
}
