import Block from '../../../core/Block';
import { navigate } from '../../../core/navigate';
import * as validators from '../../../utils/validators';
import { profile_props } from '../../../utils/const';

export class RegisterPage extends Block {
  static name = 'RegisterPage';
  constructor() {
    super({
      profileValues: profile_props,
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
        navigate('list');
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
              {{{ FormAuthElement label=this.label ref=this.name }}}
            {{/each}}
          </div>
          {{{ FormAuthButton label="Зарегистрироваться" page="list" onClick=onLogin }}}
          {{{ FormAuthLink label="Войти" }}}
        {{/FormAuth}}
      </main>
    `;
  }
}
