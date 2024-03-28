import Block from '../../../core/Block';

export class FormAuthButton extends Block {
  protected render(): string {
    return `
      {{{ Button label=this.label type="submit" style="form-auth__button" onClick=this.onClick }}}
    `;
  }
}
