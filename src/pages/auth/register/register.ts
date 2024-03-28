import Block from '../../../core/Block';
import { navigate } from '../../../core/navigate';
import {validators} from '../../../utils/validators';
import { profile_props } from '../../../utils/const';
import { ENDPOINT_PAGES as pages } from '../../../utils/const';

export class RegisterPage extends Block {
  static name = 'RegisterPage';
  constructor() {
    super({
      profileValues: profile_props,
      validate: {
        f: validators,
      },
      onLogin: () => {
        navigate(pages.login);
      },
      onRegister: () => {
        navigate(pages.chat);
      },
    });
  }
  protected render(): string {
    return `
      <main class="container">
        {{#> FormAuth}}
          {{{ FormAuthTitle label="Регистрация" }}}
          <div class="container__register">
            {{#each profileValues}}
              {{{ FormAuthElement label=this.label ref=this.name id="this.name" validate=validate.f}}}
            {{/each}}
          </div>
          {{{ FormAuthButton label="Зарегистрироваться" onClick=onRegister }}}
          {{{ FormAuthLink label="Войти" onClick=onLogin }}}
        {{/FormAuth}}
      </main>
    `;
  }
}
