import Block from '../../core/Block';

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
