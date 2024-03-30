import Block from '../../../core/Block';
import './profile__info-input.css';
import { Input } from '../../input';

import ProfileInputRaw from './profile__info-input.hbs?raw';

interface Props {
  [key: string]: string;
}

export class ProfileInput extends Block {
  constructor(props: Props) {
    super({
      ...props,
      input: new Input({
        className: props.className,
        placeholder: props.placeholder,
        type: props.type,
        id: props.id,
        name: props.name,
        onChange: (value: boolean) => console.log(`проверка валидаци:${value}`),
      }),
    });
  }

  override render() {
    return ProfileInputRaw;
  }
}
