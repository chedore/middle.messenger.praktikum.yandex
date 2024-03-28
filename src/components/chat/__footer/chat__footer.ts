import Block from '../../../core/Block';

export class ChatFooter extends Block {
  protected render(): string {
    return `
    <div class="chat__footer">
      <img class="button chat__footer-file" src="staple.svg" alt="Меню" />
      <input
        type="type"
        id="message"
        class="chat__message"
        placeholder="Сообщение"
        name="message"
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
