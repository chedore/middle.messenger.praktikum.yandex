import Block from '../../../core/Block';
import { navigate } from '../../../core/navigate';
import * as validators from '../../../utils/validators';
import { ENDPOINT_PAGES as pages } from '../../../utils/const';

export class LoginPage extends Block {
  static name = 'LoginPage';
  constructor() {
    super({
      validate: {
        login: validators.login,
      },
      onLogin: (event) => {
        event.preventDefault();
        const login = this.refs.login.value();
        const password = this.refs.password.value();

        if (!login) {
          return;
        }

        console.log({
          login,
          password,
        });
        navigate(pages.chat);
      },
      onRegister: () => {
        navigate(pages.register);
      },
    });
  }
  protected render(): string {
    return `
      <main class="container">
        {{#> FormAuth}}
          {{{ FormAuthTitle label="Вход" }}}
          <div class="container__login">
            {{{ FormAuthElement label="Логин" ref="login" validate=validate.login }}}
            {{{ FormAuthElement label="Пароль" ref="password" }}}
          </div>
          {{{ FormAuthButton label="Авторизоваться" onClick=onLogin }}}
          {{{ FormAuthLink label="Нет аккаунта?" onClick=onRegister }}}
        {{/FormAuth}}
      </main>
    `;
  }
}
