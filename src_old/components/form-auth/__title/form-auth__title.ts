import Block from '../../../core/Block';

export class FormAuthTitle extends Block {
  protected render(): string {
    return `<h1 class="form-auth__title">{{label}}</h1>`;
  }
}
