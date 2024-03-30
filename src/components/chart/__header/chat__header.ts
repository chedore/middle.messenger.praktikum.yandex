import Block from '../../../core/Block';
import './chat__header.css';

import ChatHeaderRaw from './chat__header.hbs?raw';

interface Props {
  [key: string]: unknown;
}

export class ChatHeader extends Block {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  render() {
    return ChatHeaderRaw;
  }
}
