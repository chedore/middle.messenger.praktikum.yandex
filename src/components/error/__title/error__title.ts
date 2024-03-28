import Block from '../../../core/Block';

export class ErrorTitle extends Block {
  protected render(): string {
    return `<h1 class="error__title">{{label}}</h1>`;
  }
}
