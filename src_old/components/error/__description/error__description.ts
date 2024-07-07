import Block from '../../../core/Block';

export class ErrorDescription extends Block {
  protected render(): string {
    return `<p class="error__description">{{label}}</p>`;
  }
}
