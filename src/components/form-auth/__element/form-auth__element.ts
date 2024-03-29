import Block from '../../../core/Block';
import {validators} from '../../../utils/validators';

export class FormAuthElement extends Block {
  constructor(props) {
    super({
      ...props,
      onBlur: () => this.validate(),
    });
  }

  private validate() {
    const name = this.refs.input.element.name;
    const value = this.refs.input.element.value;
    const error = validators(name, value);

    if (!error) {
      this.refs.errorLine.setProps({
        error: 'Ошибка, ввод не удовлетворяет условию',
      });
      return error;
    }
    this.refs.errorLine.setProps({ error: undefined });
    return error;
  }

  protected render(): string {
    return `
      <div class="input__item" >
          <label class="input__container">
              {{{ Input
                  classes="input input__element"
                  ref="input"
                  onBlur=onBlur
                  name=name
              }}}
              <div class="input__label">{{label}}</div>
          </label>
          {{{ ErrorLine error=error ref="errorLine"}}}
      </div>
    `;
  }
}
