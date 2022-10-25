import { Block, CoreRouter, Store } from "core"
import "../profile/profile.scss"
import { validateForm } from "helpers/validateForm"
import { router } from "../../index"
import { withRouter, withStore, withUser } from "helpers"
import { changeValues } from "service/user"

type ProfileChangeValuesPageProps = {
  router: CoreRouter
  store: Store<AppState>
  user: User | null
  values: {
    oldPasswordValue: string
    newPasswordValue: string
    check_passwordValue: string
  }
  formError: () => void
  redirectBack?: () => void
  onInput?: (e: FocusEvent) => void
  onSubmit?: () => void
}

class ProfileChangeValuesPage extends Block<ProfileChangeValuesPageProps> {
  constructor(props: ProfileChangeValuesPageProps) {
    super(props)

    this.setProps({
      ...props,
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
          console.log("ARRAY", arrayOfHtmlElements)
          // this.setProps({
          //   emailValue: arrayOfHtmlElements[0].element.value,
          //   loginValue: arrayOfHtmlElements[1].element.value,
          //   firstNameValue: arrayOfHtmlElements[2].element.value,
          //   secondNameValue: arrayOfHtmlElements[3].element.value,
          //   phoneValue: arrayOfHtmlElements[4].element.value,
          //   displayNameValue: arrayOfHtmlElements[5].element.value,
          // })
          this.setProps({
            ...props,
            user: {
              id: this.props.user!.id,
              avatar: this.props.user!.avatar,
              email: arrayOfHtmlElements[0].element.value,
              login: arrayOfHtmlElements[1].element.value,
              firstName: arrayOfHtmlElements[2].element.value,
              secondName: arrayOfHtmlElements[3].element.value,
              phone: arrayOfHtmlElements[4].element.value,
              displayName: arrayOfHtmlElements[5].element.value,
            },
          })
          const formData = arrayOfHtmlElements.reduce<any>(
            (acc, item: { name: string; element: HTMLInputElement }) =>
              Object.assign(acc, { [item.name]: item.element.value }),
            {},
          )
          console.log("Форма готова к отправке, данные: ", formData)

          this.props.store.dispatch(changeValues, formData)
        }
      },
    })
    console.log(this.props)
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
            {{!------- ПОЧТА -------}}
                <div class="profile__form__field">
                <label class="profile__form__field__label">Почта</label>
                {{{ControlledInput 
                    onInput=onInput
                    type="text" 
                    name="email" 
                    value=user.email
                    inputClassName="profile__input" 
                    divClassName="profile__input__div" 
                    errorClassName="profile__error"
                    placeholder="Почта"
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
                    value=user.login
                    inputClassName="profile__input" 
                    divClassName="profile__input__div" 
                    errorClassName="profile__error"
                    placeholder="Логин"
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
                    value=user.firstName
                    inputClassName="profile__input" 
                    divClassName="profile__input__div" 
                    errorClassName="profile__error"
                    placeholder="Имя"
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
                    value=user.secondName
                    inputClassName="profile__input" 
                    divClassName="profile__input__div" 
                    errorClassName="profile__error"
                    placeholder="Фамилия"
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
                    value=user.displayName
                    inputClassName="profile__input" 
                    divClassName="profile__input__div" 
                    errorClassName="profile__error"
                    placeholder="Имя в чате"
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
                    value=user.phone
                    inputClassName="profile__input default-font" 
                    divClassName="profile__input__div" 
                    errorClassName="profile__error"
                    placeholder="Номер телефона"
                    ref="phoneInputRef"
                    errorRef="phoneErrorRef"
                }}}
                </div>
            {{!------- LINK BACK TO PROFILE -------}}
                {{{Button className="back-to-chats" onClick=redirectBack}}}
                {{{Button type="submit" text="Сохранить" className="custom-button blue mt75" onClick=onSubmit}}}
            </form>

            </div>
        </main>
    `
  }
}

const ConnectedProfileChangeValuesPage = withRouter(withStore(withUser(ProfileChangeValuesPage)))
export { ConnectedProfileChangeValuesPage as ProfileChangeValuesPage }
