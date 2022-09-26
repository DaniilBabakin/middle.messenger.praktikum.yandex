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
        const inputEl = e.target
        const type = inputEl.name === 'login' ? ValidateType.Login : ValidateType.Password
        const inputRef = inputEl.name + 'InputRef' //Чтобы найти нужный объект в this.refs
        const errorRef = inputEl.name + 'ErrorRef' //Чтобы найти нужный объект в this.refs[inputRef]

        const errorMessage = validateForm([{ type: type, value: inputEl.value }])
        console.log(e.path[1].lastElementChild, this.refs[inputRef].refs[errorRef])
        // const errorReference = props.errorRef as string
        // this.refs[errorReference].setProps({
        //   text: errorMessage,
        // })
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
      onSubmit: (e) => {
        console.log(this.refs)
        const loginEl = this.element?.querySelector('input[name="login"]') as HTMLInputElement
        const passwordEl = this.element?.querySelector('input[name="password"]') as HTMLInputElement

        const errorMessage = validateForm([
          { type: ValidateType.Login, value: loginEl.value },
          { type: ValidateType.Password, value: passwordEl.value },
        ])
        console.log(errorMessage)
        if (errorMessage) {
          this.setProps({
            error: errorMessage,
            loginValue: loginEl.value,
            passwordValue: passwordEl.value,
          })
        } else {
          this.setProps({
            error: '',
            loginValue: loginEl.value,
            passwordValue: passwordEl.value,
          })
          console.log('Форма готова к отправке')
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
            placeholder="Пароль"
            ref="passwordInputRef"
            errorRef="passwordErrorRef"
          }}}
            {{{Button text="Войти" className="custom-button" onClick=onSubmit }}}

          </form>
          <a href="../notFound/notFound.html">Нет аккаунта?</a>
      </div>
    </main>
    `
  }
}
