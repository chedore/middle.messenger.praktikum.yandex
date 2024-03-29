import Block from '../../../core/Block';
import { ErrorTitle, ErrorDescription, ErrorLink } from '../../../components';
import './page500.css';

import Error404PageRaw from './page500.hbs?raw';

export class Error500Page extends Block {
  constructor() {
    super({
      title: new ErrorTitle({ label: '500' }),
      description: new ErrorDescription({ label: 'Мы уже фиксим' }),
      link: new ErrorLink({ label: 'Назад к чатам', page: 'chart' }),
    });
  }

  override render() {
    return Error404PageRaw;
  }
}
