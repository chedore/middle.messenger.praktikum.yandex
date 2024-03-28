import Block from '../../../core/Block';

export class ErrorLink extends Block {

  protected render(): string {
    return `
      {{{ Button label=this.label type="button" style="error__link" onClick=this.onClick }}}
    `;
  }
}
