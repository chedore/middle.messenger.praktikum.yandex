import Block from '../../core/Block';
import { pages_props } from '../../utils/const';
import { navigate } from '../../core/navigate';

export class ListPage extends Block {
  protected render(): string {
    return `
      <main class="containerlist">
        <section class="reference">
          {{{ ReferenceLinks pages=pages onClick=onRedirect}}}
        </section>
      </main>
    `;
  }
}
