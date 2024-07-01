/* eslint-disable no-console */
/* eslint-disable brace-style */
import Block from '../../../core/Block';
import './chat__header.css';
import { Button } from '../../button';
import router from '../../../core/Router';

import ChatHeaderRaw from './chat__header.hbs';
import AuthService from '../../../services/auth';

interface Props {
  [key: string]: unknown;
}

export class ChatHeader extends Block {
  constructor(props: Props) {
    super({
      ...props,
      button_logout: new Button({
        text: 'Выход',
        page: 'logout',
        className: 'button',
        type: 'submit',
        onClick: () => {
          try { AuthService.signoutUser(); }
          catch (error){ console.log(`Ошибка запроса: ${error}`); }
          router.go('/');
        },
      }),
    });
  }

  render() {
    return this.compile(ChatHeaderRaw, this.props);
  }
}
