import Block from '../../../core/Block';
import { submit } from '../../../utils/formValidator';
import { ENDPOINT_PAGES as pages } from '../../../utils/const';
import { navigate } from '../../../core/navigate';

export class ChatFooter extends Block {
  constructor() {
    super({
      onMessage: (e: SubmitEvent) => {
        const isValid: boolean = submit(e);
        if (isValid) {
          navigate(pages.list);
        }
      },
    });
  }

  protected render(): string {
    return `
    <form class="chat__footer">
      <img class="button chat__footer-file" src="staple.svg" alt="Меню" />
        <input
          type="text"
          class="chat__message"
          placeholder="Сообщение"
          name="message"
          minlength="1"
          required
        />
        {{{ Button label='' type="submit" style="chat__footer-retrieval" onClick=onMessage }}}
    </form>
    `;
  }
}
