import Block from '../../../core/Block';

export class ChatHeader extends Block {
  protected render(): string {
    return `
      <div class="chat__header">
        <div class="chat__header-avatar"></div>
        <h2 class="chat__header-title">Андрей</h2>
        <img class="button chat__header-button" src="menu.svg" alt="Меню" />
      </div>
    `;
  }
}
