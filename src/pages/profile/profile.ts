import { Block } from "core"
import * as avatar from "../../assets/defaultAvatarBig.png"
import "./profile.scss"
import MainPage from "pages/main"
import LoginPage from "pages/login"
import ProfileChangePasswordPage from "pages/profileChangePassword"
import ProfileChangeValuesPage from "pages/profileChangeValues"

export class ProfilePage extends Block {
  constructor() {
    super()
    this.setProps({
      redirectToProfileChangeValues: () => {
        window.currentPage.page = ProfileChangeValuesPage
      },
      redirectToProfileChangePassword: () => {
        window.currentPage.page = ProfileChangePasswordPage
      },
      redirectToLogin: () => {
        window.currentPage.page = LoginPage
      },
      redirectToMain: () => {
        window.currentPage.page = MainPage
      },
    })
  }

  protected render(): string {
    return `
      <main class="profile">
        <div class="profile__container">
            <div>
            <img src="${avatar}" class="profile__container_image" alt="Моя фотография"/>
            <h1 class="profile__container_title">Даня</h1>
            </div>
            <form class="profile__form">
            {{!------- ПОЧТА -------}}
            <div class="profile__form__field">
                <label class="profile__form__field__label">Почта</label>
                <p class="profile__form__field__value">rrdreaming@yandex.ru</p>
            </div>

            {{!------- ЛОГИН -------}}
            <div class="profile__form__field">
                <label class="profile__form__field__label">Логин</label>
                <p class="profile__form__field__value">daniilbabakin</p>
            </div>

            {{!------- ИМЯ -------}}
            <div class="profile__form__field">
                <label class="profile__form__field__label">Имя</label>
                <p class="profile__form__field__value">Даниил</p>
            </div>

            {{!------- ФАМИЛИЯ -------}}
            <div class="profile__form__field">
                <label class="profile__form__field__label">Фамилия</label>
                <p class="profile__form__field__value">Бабакин</p>
            </div>
            
            {{!------- ИМЯ В ЧАТЕ -------}}
            <div class="profile__form__field">
                <label class="profile__form__field__label">Имя в чате</label>
                <p class="profile__form__field__value">Даня</p>
            </div>

            {{!------- ТЕЛЕФОН -------}}
            <div class="profile__form__field no-border">
                <label class="profile__form__field__label">Телефон</label>
                <p class="profile__form__field__value default-font">+7 (916) 563 19 58</p>
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
                {{{Button text="Выйти" className="profile-change-values red" onClick=redirectToLogin}}}
            </div> 
            {{!------- LINK BACK TO CHATS -------}}
                {{{Button className="back-to-chats" onClick=redirectToMain}}}
            </div>
        </div>
     </main>
    `
  }
}
//href="../profileChangeValues/profileChangeValues.hbs"
//<a class="back-to-chats" href="../../../index.hbs"></a>
