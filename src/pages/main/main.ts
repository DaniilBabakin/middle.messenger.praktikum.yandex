import Block from 'core/Block'
import './main.scss'
import { LoginPage } from '../login/login'
import { validateForm, ValidateType } from 'helpers/validateForm'
export class MainPage extends Block {
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
      onSubmit: () => {
        const arrayOfInputsName = ['email', 'login', 'first_name', 'second_name', 'phone', 'password', 'check_password']

        const arrayOfHtmlElements: { name: string; element: HTMLInputElement }[] = arrayOfInputsName.map(
          (name: string) => {
            return { name: name, element: this.element?.querySelector(`input[name='${name}']`) as HTMLInputElement }
          },
        )

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
    <main class="main">
      {{{ChatContacts}}}
      {{{ChatMessages}}}
    </main>
    `
  }
}
