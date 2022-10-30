import { Block, CoreRouter, Store } from "core"
import "../profile/profile.scss"
import { validateForm } from "helpers/validateForm"
import { router } from "../../index"
import { withRouter, withStore, withUser } from "helpers"
import { changePassword } from "service/user"

type ProfileChangePasswordPageProps = {
  router: CoreRouter
  store: Store<AppState>
  user: Nullable<User>
  values: {
    oldPasswordValue: string
    newPasswordValue: string
    check_passwordValue: string
  }
  events: Record<string, any>
  formError: () => void
  redirectBack: () => void
  onInput?: (e: FocusEvent) => void
  onSubmit?: () => void
}

class ProfileChangePasswordPage extends Block<ProfileChangePasswordPageProps> {
  constructor(props: ProfileChangePasswordPageProps) {
    super({
      ...props,
      events: {
        submit: (e: Event) => {
          e.preventDefault()
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
                ...this.props,
                values: {
                  oldPasswordValue: arrayOfHtmlElements[0].element.value,
                  newPasswordValue: arrayOfHtmlElements[1].element.value,
                  check_passwordValue: arrayOfHtmlElements[2].element.value,
                },
              })

              const formData = arrayOfHtmlElements
                .filter(({ name }) => name !== "check_password")
                .reduce<any>(
                  (acc, item: { name: string; element: HTMLInputElement }) =>
                    Object.assign(acc, { [item.name]: item.element.value }),
                  {},
                )
              console.log("Форма готова к отправке, данные: ", formData)

              this.props.store.dispatch(changePassword, formData)
            }
          }
          return false
        },
      },
    })

    this.setProps({
      ...props,
      values: {
        oldPasswordValue: "",
        newPasswordValue: "",
        check_passwordValue: "",
      },
      formError: () => this.props.store.getState().formError,
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
    })
  }

  protected render(): string {
    return `
        <main class="profile">
            <div class="profile__container">
            <div>
                {{{ChangeAvatar src="${this.props.user?.avatar}" type="USER"}}}
                <h1 class="profile__container_title">{{user.displayName}}</h1>
            </div>
            <form class="profile__form">
            {{!------- СТАРЫЙ ПАРОЛЬ -------}}
                <div class="profile__form__field">
                <label class="profile__form__field__label">Старый пароль</label>
                {{{ControlledInput 
                    onInput=onInput
                    type="password" 
                    name="oldPassword" 
                    value=values.oldPasswordValue
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
                    value=values.newPasswordValue
                    inputClassName="profile__input" 
                    divClassName="profile__input__div" 
                    errorClassName="profile__error"
                    placeholder="Введите новый пароль"
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
                    value=values.check_passwordValue
                    inputClassName="profile__input" 
                    divClassName="profile__input__div" 
                    errorClassName="profile__error"
                    placeholder="Повторите новый пароль"
                    ref="check_passwordInputRef"
                    errorRef="check_passwordErrorRef"
                }}}
                </div>
                {{{ErrorFromServer text=formError}}}
            {{!------- LINK BACK TO PROFILE -------}}
                {{{Button className="back-to-chats" onClick=redirectBack}}}
                {{{Button type="submit" text="Сохранить" className="custom-button blue mt220"}}}
            </form>

            </div>
        </main>
    `
  }
}

const ConnectedProfileChangePasswordPage = withRouter(withStore(withUser(ProfileChangePasswordPage)))
export { ConnectedProfileChangePasswordPage as ProfileChangePasswordPage }
