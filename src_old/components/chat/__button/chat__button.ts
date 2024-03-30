import Block from '../../../core/Block';

export class ChatButton extends Block {
  protected render(): string {
    return `
      <button class="button chat__button" type="submit" page="{{page}}">
        <img className="chat__button-searchform" src="loupe.svg" alt="Поиск" />
        {{label}}
      </button>
    `;
  }
}
