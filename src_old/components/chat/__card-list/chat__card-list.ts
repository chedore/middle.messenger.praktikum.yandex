import Block from '../../../core/Block';

export class ListChatCards extends Block {
  static name = 'ListChatCards';

  protected render(): string {
    return `
    <ul class="cards">
      <li class="cards-list">
        {{#each cards}}
          {{{ ChatCard name=this.name message=this.message time=this.time count=this.count }}}
        {{/each}}
      </li>
    </ul>
    `;
  }
}
