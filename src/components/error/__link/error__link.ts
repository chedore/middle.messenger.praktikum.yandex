import Block from '../../../core/Block';
import './error__link.css';

import ErrorLinkRaw from './error__link.hbs?raw';

interface Props {
  [key: string]: string;
}

export class ErrorLink extends Block {
  constructor(props: Props) {
    super({ ...props });
  }

  override render() {
    return ErrorLinkRaw;
  }
}
