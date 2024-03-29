import Block from '../../../core/Block';
import { navigate } from '../../../core/navigate';
import { ENDPOINT_PAGES as pages } from '../../../utils/const';
import { submit } from '../../../utils/formValidator';

export class LoginPage extends Block {
  static name = 'LoginPage';
  constructor() {
    super({
      onLogin: (e: SubmitEvent) => {
        const isValid: boolean = submit(e);
        if (isValid) {
          navigate(pages.chat);
        }
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
            {{{ FormAuthElement label="Логин" ref="login" name="login" }}}
            {{{ FormAuthElement label="Пароль" ref="password" name="password"}}}
          </div>
          {{{ FormAuthButton label="Авторизоваться" onClick=onLogin }}}
          {{{ FormAuthLink label="Нет аккаунта?" onClick=onRegister }}}
        {{/FormAuth}}
      </main>
    `;
  }
}
