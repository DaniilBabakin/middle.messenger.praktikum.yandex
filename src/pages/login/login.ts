import Block from "core/Block"
import "./login.scss"
import { validateForm, ValidateType } from "helpers/validateForm"
import { ROUTES } from "constants/routes"
import { login } from "service/auth"
import { withRouter, withStore, withUser } from "helpers"
import { CoreRouter, Store } from "core"

type LoginPageProps = {
  router: CoreRouter
  store: Store<AppState>
  user: Nullable<User>
  loginValue: string
  passwordValue: string
  events: Record<string, any>
  formError: () => void
  onInput?: (e: FocusEvent) => void
  onRedirectToSignUp?: () => void
  onSubmit: (e: Event) => void
}

class LoginPage extends Block<LoginPageProps> {
  constructor(props: LoginPageProps) {
    super({
      ...props,
      events: {
        submit: (e: Event) => {
          e.preventDefault()
          const loginEl = this.element?.querySelector("input[name='login']") as HTMLInputElement
          const passwordEl = this.element?.querySelector("input[name='password']") as HTMLInputElement

          const errorMessage = validateForm([
            { type: ValidateType.Login, value: loginEl.value },
            { type: ValidateType.Password, value: passwordEl.value },
          ])

          if (errorMessage.text) {
            this.refs[errorMessage.inputName].refs[errorMessage.inputName.replace("Input", "Error")].setProps({
              text: '415823858235',
            })
            console.log(this.refs)
          } else {
            this.setProps({
              ...this.props,
              loginValue: loginEl.value,
              passwordValue: passwordEl.value,
            })

            const formData = { login: loginEl.value, password: passwordEl.value }
            console.log("Форма готова к отправке, данные: ", formData)

            this.props.store.dispatch(login, formData)
          }
        },
      },
    })
    console.log(this.props)
    this.setProps({
      ...props,
      loginValue: "",
      passwordValue: "",
      formError: () => this.props.store.getState().formError,
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
        window.router.go(ROUTES.SignUp)
      },
    })
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
            {{{ErrorFromServer text=formError className="white"}}}
            {{{Button type="submit" text="Войти" className="custom-button"}}}
          </form>
          {{{Button text="Нет аккаунта?" className="redirect-button" onClick=onRedirectToSignUp}}}
      </div>
    </main>
    `
  }
}

const ConnectedLoginPage = withRouter(withStore(withUser(LoginPage)))
export { ConnectedLoginPage as LoginPage }
