import Block from '../../../core/Block';
import { navigate } from '../../../core/navigate';
import {validators} from '../../../utils/validators';
import { ENDPOINT_PAGES as pages } from '../../../utils/const';
import { ComponentsName } from '../../../utils/validationRules';

export class LoginPage extends Block {
  static name = 'LoginPage';
  constructor() {
    super({
      validate: {
        f: validators,
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
            {{{ FormAuthElement label="Логин" ref="login" id="login" validate=validate.f }}}
            {{{ FormAuthElement label="Пароль" ref="password" id="password" validate=validate.f}}}
          </div>
          {{{ FormAuthButton label="Авторизоваться" onClick=onLogin }}}
          {{{ FormAuthLink label="Нет аккаунта?" onClick=onRegister }}}
        {{/FormAuth}}
      </main>
    `;
  }
}
