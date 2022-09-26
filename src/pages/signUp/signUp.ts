import Block from 'core/Block'
import './signUp.scss'
import { LoginPage } from '../login/login'
import { validateForm, ValidateType } from 'helpers/validateForm'
export class SignUpPage extends Block {
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

        const errorMessage = validateForm([{ type: inputEl.name, value: String(inputEl.value) }]) //Две константы выше сделаны как раз для того, чтобы не нужно было через условия отслеживать, какой тип отправлять. Результат функции - {text:сообщение об ошибке, inputName:имя элемента}

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
      onSubmit: () => {
        const arrayOfInputsName = ['email', 'login', 'first_name', 'second_name', 'phone', 'password', 'check_password']

        const arrayOfHtmlElements: { name: string; element: HTMLInputElement }[] = arrayOfInputsName.map((name: string) => {
          return { name: name, element: this.element?.querySelector(`input[name='${name}']`) as HTMLInputElement }
        })

        const errorMessage = validateForm(
          arrayOfHtmlElements.map((item: { name: string; element: HTMLInputElement }) => {
            return { type: item.element.name, value: item.element.value }
          }),
        )
        
        if (errorMessage.text) {
          this.refs[errorMessage.inputName].refs[errorMessage.inputName.replace('Input', 'Error')].setProps({
            text: errorMessage.text,
          })
        } else {
          this.setProps({
            error: '',
          })
          console.log(
            'Форма успешна отправлена, данные: ',
            arrayOfHtmlElements.map((item: { name: string; element: HTMLInputElement }) => {
              return { [item.name]: item.element.value }
            }),
          )
        }
        console.log(errorMessage)
        // window.currentPage.page = SignUpPage
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
            inputClassName="custom-input short"
            divClassName="short last-short"
            placeholder="Повторите пароль"
            ref="check_passwordInputRef"
            errorRef="check_passwordErrorRef"
          }}}
            {{{Button text="Зарегистрироваться" className="custom-button" onClick=onSubmit}}}
          </form>
          <a href="../login/login.hbs">Войти</a>
      </div>
    </main>
    `
  }
}
