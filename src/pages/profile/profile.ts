import { Block, Store } from "core"
import "./profile.scss"
import { ROUTES } from "constants/routes"
import { authAPI } from "api/authAPI"
import { withRouter, withStore, withUser } from "helpers"
import { Router } from "service/router/Router"


type ProfilePageProps = {
  router: Router
  store: Store<AppState>
  user: User | null
  redirectToProfileChangeValues?: () => void
  redirectToProfileChangePassword?: () => void
  redirectQuitProfile?: () => void
  redirectBack?: () => void
}

class ProfilePage extends Block<ProfilePageProps> {
  constructor(props: ProfilePageProps) {
    super(props)

    this.setProps({
      ...props,
      redirectToProfileChangeValues: () => {
        this.props.router.go(ROUTES.ProfileSettings)
      },
      redirectToProfileChangePassword: () => {
        this.props.router.go(ROUTES.ChangePassword)
      },
      redirectQuitProfile: () => {
        authAPI.logout()
        this.props.router.go(ROUTES.Login)
      },
      redirectBack: () => {
        this.props.router.back()
      },
    })
    console.log("THIS", this)
  }

  protected render(): string {
    return `
      <main class="profile">
        <div class="profile__container">
            <div>
            {{{ChangeAvatar src="${this.props.user?.avatar}"}}}
            <h1 class="profile__container_title">{{user.displayName}}</h1>
            </div>
            <form class="profile__form">
            {{!------- ПОЧТА -------}}
            <div class="profile__form__field">
                <label class="profile__form__field__label">Почта</label>
                <p class="profile__form__field__value">{{user.firstName}}</p>
            </div>

            {{!------- ЛОГИН -------}}
            <div class="profile__form__field">
                <label class="profile__form__field__label">Логин</label>
                <p class="profile__form__field__value">{{user.login}}</p>
            </div>

            {{!------- ИМЯ -------}}
            <div class="profile__form__field">
                <label class="profile__form__field__label">Имя</label>
                <p class="profile__form__field__value">{{user.firstName}}</p>
            </div>

            {{!------- ФАМИЛИЯ -------}}
            <div class="profile__form__field">
                <label class="profile__form__field__label">Фамилия</label>
                <p class="profile__form__field__value">{{user.secondName}}</p>
            </div>
            
            {{!------- ИМЯ В ЧАТЕ -------}}
            <div class="profile__form__field">
                <label class="profile__form__field__label">Имя в чате</label>
                <p class="profile__form__field__value">{{user.displayName}}</p>
            </div>

            {{!------- ТЕЛЕФОН -------}}
            <div class="profile__form__field no-border">
                <label class="profile__form__field__label">Телефон</label>
                <p class="profile__form__field__value default-font">{{user.phone}}</p>
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
const ConnectedProfilePage = withRouter(withStore(withUser(ProfilePage)))
export { ConnectedProfilePage as ProfilePage }
