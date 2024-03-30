import Block from '../../../core/Block';
import { ENDPOINT_PAGES as pages } from '../../../utils/const';
import { navigate } from '../../../core/navigate';

export class Page500 extends Block {
  constructor() {
    super({
      onChart: () => {
        navigate(pages.chat);
      },
    });
  }
  protected render(): string {
    return `
      <main class="error">
        {{{ ErrorTitle label="500" }}}
        {{{ ErrorDescription label="Мы уже фиксим" }}}
        {{{ ErrorLink label="Назад к чатам" onClick=onChart }}}
      </main>
    `;
  }
}
