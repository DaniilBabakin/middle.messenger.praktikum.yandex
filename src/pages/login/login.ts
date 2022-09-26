import { SignUpPage } from '../signUp/signUp'
import Block from 'core/Block'
import './login.scss'
import { validateForm, ValidateType } from 'helpers/validateForm'

export class LoginPage extends Block {
  constructor() {
    super()

    this.setProps({
      error: '',
      loginValue: '',
      passwordValue: '',
      onInput: (e: FocusEvent) => {
        const inputEl = e.target as HTMLInputElement
        const inputRef = inputEl.name + 'InputRef' //Чтобы найти нужный объект в this.refs. Получается, например loginInputRef
        const errorRef = inputEl.name + 'ErrorRef' //Чтобы найти нужный объект в this.refs[inputRef] Получается, например loginErrorRef

        const errorMessage = validateForm([{ type: inputEl.name, value: inputEl.value }]) //Две константы выше сделаны как раз для того, чтобы не нужно было через условия отслеживать, какой тип отправлять. Результат функции - {text:сообщение об ошибке, inputName:имя элемента}

        this.refs[inputRef].refs[errorRef].setProps({
          text: errorMessage.text,
        })
      },
      onFocus: () => {
        console.log('focus')
      },
      onBlur: () => {
        console.log('blur')
      },
      onRedirectToSignUp: () => {
        window.currentPage.page = SignUpPage
      },
      onSubmit: (e) => {
        const loginEl = this.element?.querySelector('input[name="login"]') as HTMLInputElement
        const passwordEl = this.element?.querySelector('input[name="password"]') as HTMLInputElement

        const errorMessage = validateForm([
          { type: ValidateType.Login, value: loginEl.value },
          { type: ValidateType.Password, value: passwordEl.value },
        ])

        if (errorMessage.text) {
          this.refs[errorMessage.inputName].refs[errorMessage.inputName.replace('Input', 'Error')].setProps({
            text: errorMessage.text,
          })
        } else {
          this.setProps({
            error: '',
          })
          console.log({ Login: loginEl.value, Password: passwordEl.value })
        }
        // console.log(errorMessage)
        // window.currentPage.page = SignUpPage
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
            inputClassName="custom-input"
            divClassName="last"
            placeholder="Пароль"
            ref="passwordInputRef"
            errorRef="passwordErrorRef"
          }}}
            {{{Button text="Войти" className="custom-button" onClick=onSubmit }}}

          </form>
          {{{Link text="Нет аккаунта?" className="redirect-button" onClick=onRedirectToSignUp}}}
      </div>
    </main>
    `
  }
}
