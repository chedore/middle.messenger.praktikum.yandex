import Block from '../../../core/Block';
import { ErrorTitle, ErrorDescription, ErrorLink } from '../../../components';
import './page404.css';

import Error404PageRaw from './page404.hbs?raw';

export class Error404Page extends Block {
  constructor() {
    super({
      title: new ErrorTitle({ label: '404' }),
      description: new ErrorDescription({ label: 'Не туда попали' }),
      link: new ErrorLink({ label: 'Назад к чатам', page: 'chart' }),
    });
  }

  override render() {
    return Error404PageRaw;
  }
}
