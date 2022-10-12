import { Block } from "core"
import * as avatar from "../../assets/defaultAvatarBig.png"
import "./profile.scss"
import { router } from "../../index"
import { ROUTES } from "constants/routes"
import { authAPI } from "service/api/authAPI"
import GlobalStorage, { StoreEvents } from "service/GlobalStorage"
import { UserType } from "types/User"

export class ProfilePage extends Block {
  currentUser
  constructor() {
    super()
    this.currentUser = GlobalStorage.getState().user
    if (!this.currentUser) {
      authAPI.getUser().then((res: UserType) => {
        this.setProps({
          ...this.props,
          values: {
            emailValue: res.email,
            loginValue: res.login,
            firstNameValue: res.first_name,
            secondNameValue: res.second_name,
            phoneValue: res.phone,
            displayNameValue: res.display_name,
          },
        })
      })
    }
    this.setProps({
      values: {
        emailValue: `${this.currentUser?.email}`,
        loginValue: `${this.currentUser?.login}`,
        firstNameValue: `${this.currentUser?.first_name}`,
        secondNameValue: `${this.currentUser?.second_name}`,
        phoneValue: `${this.currentUser?.phone}`,
        displayNameValue: `${this.currentUser?.display_name}`,
      },
      redirectToProfileChangeValues: () => {
        router.go(ROUTES.ProfileSettings)
      },
      redirectToProfileChangePassword: () => {
        router.go(ROUTES.ChangePassword)
      },
      redirectQuitProfile: () => {
        authAPI.logout()
        router.go(ROUTES.Login)
      },
      redirectBack: () => {
        router.back()
      },
    })

    GlobalStorage.eventBus.on(StoreEvents.SetUser, () => {
      const user = GlobalStorage.getState().user
      this.setProps({
        ...this.props,
        values: {
          emailValue: user?.email,
          loginValue: user?.login,
          firstNameValue: user?.first_name,
          secondNameValue: user?.second_name,
          phoneValue: user?.phone,
          displayNameValue: user?.display_name,
        },
      })
    })
  }

  protected render(): string {
    return `
      <main class="profile">
        <div class="profile__container">
            <div>
            <img src="${avatar}" class="profile__container_image" alt="Моя фотография"/>
            <h1 class="profile__container_title">${this.props?.values?.displayNameValue}</h1>
            </div>
            <form class="profile__form">
            {{!------- ПОЧТА -------}}
            <div class="profile__form__field">
                <label class="profile__form__field__label">Почта</label>
                <p class="profile__form__field__value">${this.props?.values?.emailValue}</p>
            </div>

            {{!------- ЛОГИН -------}}
            <div class="profile__form__field">
                <label class="profile__form__field__label">Логин</label>
                <p class="profile__form__field__value">${this.props?.values?.loginValue}</p>
            </div>

            {{!------- ИМЯ -------}}
            <div class="profile__form__field">
                <label class="profile__form__field__label">Имя</label>
                <p class="profile__form__field__value">${this.props?.values?.firstNameValue}</p>
            </div>

            {{!------- ФАМИЛИЯ -------}}
            <div class="profile__form__field">
                <label class="profile__form__field__label">Фамилия</label>
                <p class="profile__form__field__value">${this.props?.values?.secondNameValue}</p>
            </div>
            
            {{!------- ИМЯ В ЧАТЕ -------}}
            <div class="profile__form__field">
                <label class="profile__form__field__label">Имя в чате</label>
                <p class="profile__form__field__value">${this.props?.values?.displayNameValue}</p>
            </div>

            {{!------- ТЕЛЕФОН -------}}
            <div class="profile__form__field no-border">
                <label class="profile__form__field__label">Телефон</label>
                <p class="profile__form__field__value default-font">${this.props?.values?.phoneValue}</p>
            </div>
            </form>

            <div>
            {{!------- ИЗМЕНИТЬ ДАННЫЕ -------}}
            <div class="profile__form__field">
                {{{Button text="Изменить данные" className="profile-change-values blue" onClick=redirectToProfileChangeValues}}}
            </div>
            
            {{!------- ИЗМЕНИТЬ ПАРОЛЬ -------}}
            <div class="profile__form__field">
                {{{Button text="Изменить пароль" className="profile-change-values blue" onClick=redirectToProfileChangePassword}}}
            </div>

            {{!------- ВЫЙТИ -------}}
            <div class="profile__form__field no-border">
                {{{Button text="Выйти" className="profile-change-values red" onClick=redirectQuitProfile}}}
            </div> 
            {{!------- LINK BACK TO CHATS -------}}
                {{{Button className="back-to-chats" onClick=redirectBack}}}
            </div>
        </div>
     </main>
    `
  }
}
