import Block from '../../../core/Block';

export class Page404 extends Block {
  protected render(): string {
    return `
      <main class="error">
        {{{ ErrorTitle label="404" }}}
        {{{ ErrorDescription label="Не туда попали" }}}
        {{{ ErrorLink label="Назад к чатам" }}}
      </main>
    `;
  }
}
