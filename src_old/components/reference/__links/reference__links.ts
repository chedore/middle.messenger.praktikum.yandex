import Block from '../../../core/Block';
import { navigate } from '../../../core/navigate';

export class ReferenceLinks extends Block {
  constructor() {
    super({
      onRedirect: (e) => {
        const page = e.target.textContent.trim();
        navigate(page);
      },
    });
  }

  protected render(): string {
    return `
      <nav>
        <ul class="reference__links">
          {{{ ReferenceLink label='login' ref="login" type="submit" style="form-auth__button" onClick=onRedirect }}}
          {{{ ReferenceLink label='register' ref="register" type="submit" style="form-auth__button" onClick=onRedirect }}}
          {{{ ReferenceLink label='chat' ref="chat" type="submit" style="form-auth__button" onClick=onRedirect }}}
          {{{ ReferenceLink label='404' ref="404" type="submit" style="form-auth__button" onClick=onRedirect }}}
          {{{ ReferenceLink label='500' ref="500" type="submit" style="form-auth__button" onClick=onRedirect }}}
          {{{ ReferenceLink label='profile' ref="profile" type="submit" style="form-auth__button" onClick=onRedirect }}}
        </ul>
      </nav>
    `;
  }
}
