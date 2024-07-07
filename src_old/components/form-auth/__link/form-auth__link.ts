import Block from '../../../core/Block';

export class FormAuthLink extends Block {
  protected render(): string {
    return `
      {{{ Button label=this.label type="button" style="form-auth__link" onClick=this.onClick }}}
    `;
  }
}
