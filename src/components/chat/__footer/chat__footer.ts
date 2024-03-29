import Block from '../../../core/Block';

export class ChatFooter extends Block {
  protected render(): string {
    return `
    <div class="chat__footer">
    <img class="button chat__footer-file" src="staple.svg" alt="Меню" />
      <input
        type="text"
        class="chat__message"
        placeholder="Сообщение"
        name="message"
        minlength="1"
        required
      />
      <img
        class="button chat__footer-retrieval"
        src="retrieval-right.svg"
        alt="Меню"
      />
    </div>
    `;
  }
}
