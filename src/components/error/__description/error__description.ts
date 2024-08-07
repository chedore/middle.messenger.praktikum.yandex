import Block from '../../../core/Block';
import './error__description.css';

import ErrorDescriptionRaw from './error__description.hbs';

interface Props {
  [key: string]: string;
}

export class ErrorDescription extends Block {
  constructor(props: Props) {
    super({ ...props });
  }

  override render() {
    return this.compile(ErrorDescriptionRaw, this.props);
  }
}
