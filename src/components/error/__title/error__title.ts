import Block from '../../../core/Block';
import './error__title.css';

import ErrorTitleRaw from './error__title.hbs';

interface Props {
  [key: string]: string;
}

export class ErrorTitle extends Block {
  constructor(props: Props) {
    super({ ...props });
  }

  override render() {
    return this.compile(ErrorTitleRaw, this.props);
  }
}
