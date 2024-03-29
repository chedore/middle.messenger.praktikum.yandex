import Block from '../../core/Block';
import './chat.css';

import ChatPageRaw from './chat.hbs?raw';

export class ChatPage extends Block {
  constructor() {
    super({});
  }

  override render() {
    return ChatPageRaw;
  }
}
