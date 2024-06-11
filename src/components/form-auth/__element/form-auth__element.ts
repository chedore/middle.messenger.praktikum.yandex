import Block from '../../../core/Block';
import './form-auth__element.css';
import { Input } from '../../input';

import FormAuthElementRaw from './form-auth__element.hbs?raw';

interface Props {
  [key: string]: string;
}

export class FormAuthElement extends Block {
  constructor(props: Props) {
    super({
      ...props,
      input: new Input({
        className: 'input input__element',
        placeholder: '',
        type: props.type,
        id: props.name,
        name: props.name,
        onChange: (value: boolean) => {
          if (!value) {
            this.setProps({ error: 'Ошибка, ввод не удовлетворяет условию' });
          } else {
            this.setProps({ error: undefined });
          }
        },
      }),
    });
  }

  override render() {
    return FormAuthElementRaw;
  }
}
