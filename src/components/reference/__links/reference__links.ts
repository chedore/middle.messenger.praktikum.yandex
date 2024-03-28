import Block from '../../../core/Block';
import { navigate } from '../../../core/navigate';

export class ReferenceLinks extends Block {
  constructor() {
    super({
      onRedirect: () => {
        const label = this.refs.login.props.label;
        console.log(label)
        navigate(label);

      }
    });
  }

  protected render(): string {
    return `
      <nav>
        <ul class="reference__links">
          {{{ ReferenceLink label='login' ref="login" type="submit" style="form-auth__button" onClick=onRedirect }}}
        </ul>
      </nav>
    `;
  }
}
