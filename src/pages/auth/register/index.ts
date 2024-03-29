import Block from '../../../core/Block';
import './register.css';

import RegisterPageRaw from './register.hbs?raw';

interface Props {
  [key: string]: unknown;
}

export class RegisterPage extends Block {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  override render() {
    return RegisterPageRaw;
  }
}
