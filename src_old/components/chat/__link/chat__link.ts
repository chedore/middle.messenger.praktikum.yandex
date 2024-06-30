import Block from '../../../core/Block';

export class ChatLink extends Block {
  protected render(): string {
    return `
      <button class="button chat__link" type="submit" page="{{page}}">
        <img className="chat__link-search" src="search.svg" alt="Поиск" />
        {{label}}
      </button>
    `;
  }
}
