import Block from '../../../core/Block';
import { navigate } from '../../../core/navigate';
import { profile_props } from '../../../utils/const';
import { ENDPOINT_PAGES as pages } from '../../../utils/const';
import { submit } from '../../../utils/formValidator';

export class RegisterPage extends Block {
  static name = 'RegisterPage';
  constructor() {
    super({
      profileValues: profile_props,
      onLogin: () => {
        navigate(pages.login);
      },
      onRegister: (e: SubmitEvent) => {
        const isValid: boolean = submit(e);
        if (isValid) {
          navigate(pages.chat);
        }
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
              {{{ FormAuthElement label=this.label ref=this.name name=this.name}}}
            {{/each}}
          </div>
          {{{ FormAuthButton label="Зарегистрироваться" onClick=onRegister }}}
          {{{ FormAuthLink label="Войти" onClick=onLogin }}}
        {{/FormAuth}}
      </main>
    `;
  }
}
