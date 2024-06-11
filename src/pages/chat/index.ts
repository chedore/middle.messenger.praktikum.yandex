import Block from '../../core/Block';
import './chat.css';
import { ChatHeader, ChatCard, ChatFooter } from '../../components';

import ChatPageRaw from './chat.hbs?raw';

interface Props {
  [key: string]: unknown;
}

export class ChatPage extends Block {
  constructor(props: Props) {
    super({
      ...props,
      header: new ChatHeader({}),
      cards: [
        new ChatCard({
          name: 'Андрей',
          message: 'Изображение',
          time: '10:49',
          count: '2',
        }),
        new ChatCard({
          name: 'Киноклуб',
          message: 'стикер',
          owner: true,
          time: '12:00',
        }),
        new ChatCard({
          name: 'Илья',
          message: 'Друзья, у меня для вас особенный выпуск новостей!...',
          time: '15:12',
          count: '4',
        }),
        new ChatCard({
          name: 'Вадим',
          message: 'Круто!',
          owner: true,
          time: 'Пт',
        }),
      ],
      footer: new ChatFooter({}),
    });
  }

  override render() {
    return ChatPageRaw;
  }
}
