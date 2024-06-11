import Block from '../../../core/Block';
import './chat__card.css';

import ChatCardRaw from './chat__card.hbs?raw';

interface Props {
  [key: string]: unknown;
}

export class ChatCard extends Block {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  render() {
    return ChatCardRaw;
  }
}
