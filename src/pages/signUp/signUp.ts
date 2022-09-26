import Block from 'core/Block'
import './signUp.scss'
import { LoginPage } from '../login/login'
export class SignUpPage extends Block {
  protected getStateFromProps() {
    this.state = {
      onLogin: () => {
        console.log((window.currentPage.page = LoginPage))
      },
    }
  }
  render() {
    // language=hbs
    return `
    <main class="signUp">
      <div class="signUp__container">
        {{{Title title="Пора познакомиться!" subtitle="Будем рады видеть тебя в нашем приложении" }}}
          <form class="signUp__form">
            <input class="custom-input" name="email" type="text" placeholder="Почта"/>
            <input class="custom-input" name="login" type="text" placeholder="Логин"/>
            <input class="custom-input" name="first_name" type="text" placeholder="Имя"/>
            <input class="custom-input" name="second_name" type="text" placeholder="Фамилия"/>
            <input class="custom-input" name="phone" type="text" placeholder="Телефон"/>
            <input class="custom-input" name="password"  placeholder="Пароль"/>
            <input class="custom-input" name="check_password" type="text" placeholder="Повторите пароль"/>
            {{{Button text="Зарегистрироваться" className="custom-button" onClick=onLogin}}}
          </form>
          <a href="../login/login.hbs">Войти</a>
      </div>
    </main>
    `
  }
}
