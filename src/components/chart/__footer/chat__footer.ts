import Block from '../../../core/Block';
import './chat__footer.css';
import { Input } from '../../input';

import ChatFooterRaw from './chat__footer.hbs?raw';

interface Props {
  [key: string]: unknown;
}

export class ChatFooter extends Block {
  constructor(props: Props) {
    super({
      ...props,
      input: new Input({
        className: 'chat__message',
        placeholder: 'Сообщение',
        type: 'text',
        id: 'message',
        name: 'message',
        onChange: (value: boolean) => console.log(`проверка валидаци:${value}`),
      }),
    });
  }

  render() {
    return ChatFooterRaw;
  }
}
