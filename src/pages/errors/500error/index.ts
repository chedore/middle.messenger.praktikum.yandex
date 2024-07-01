import Block from '../../../core/Block';
import { ErrorTitle, ErrorDescription, ErrorLink } from '../../../components';
import './500error.css';

import Error500PageRaw from './500error.hbs';

export class Error500Page extends Block {
  constructor() {
    super({
      title: new ErrorTitle({ label: '500' }),
      description: new ErrorDescription({ label: 'Мы уже фиксим' }),
      link: new ErrorLink({ label: 'Назад к чатам', page: 'messenger' }),
    });
  }

  override render() {
    return this.compile(Error500PageRaw, this.props);
  }
}
