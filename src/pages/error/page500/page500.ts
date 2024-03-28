import Block from '../../../core/Block';

export class Page500 extends Block {
  protected render(): string {
    return `
      <main class="error">
        {{{ ErrorTitle label="500" }}}
        {{{ ErrorDescription label="Мы уже фиксим" }}}
        {{{ ErrorLink label="Назад к чатам" }}}
      </main>
    `;
  }
}
