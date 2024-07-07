import Block from '../../core/Block';
import store from '../../core/Store';
import { validate } from '../../utils/validate';
import { ComponentsName } from '../../utils/validationRules';
import './input-message.css';
/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */

import InputMessageRaw from './input-message.hbs';

interface Props {
  [key: string]: unknown;
}
export class InputMessage extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        submit: (e: SubmitEvent) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const inputElement = form.elements.namedItem('message') as HTMLInputElement;
          const message = inputElement.value;
          if (!validate(ComponentsName.MESSAGE, message)) {
            console.log('Сообщение не должно быть пустым');
            return;
          }

          const currentStore = store.getState();
          const currentSocket = currentStore.currentSocket;

          currentSocket?.sendMessage(message);
        },
      },
    });
  }

  override render() {
    return this.compile(InputMessageRaw, this.props);
  }
}
