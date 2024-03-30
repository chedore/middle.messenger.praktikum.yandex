import Block from '../../core/Block';
import { cards_props } from '../../utils/const';

export class ChatPage extends Block {
  constructor() {
    super({
      cards: cards_props,
    });
  }
  protected render(): string {
    return `
      <main class="containerchat">
        <header class="containerchat__header">
          {{{ ChatHeader }}}
        </header>

        <aside class="containerchat__sidebar">
          {{{ ChatLink label="Профиль" type="link" page="chat" }}}
          {{{ ChatButton label="Поиск" type="button" page="chat" }}}
          {{{ ListChatCards cards=cards}}}
        </aside>

        <section class="containerchat__main"></section>

        <footer class="containerchat__footer">{{{ ChatFooter }}}</footer>

      </main>
    `;
  }
}
