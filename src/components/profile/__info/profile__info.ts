import Block from '../../../core/Block';
import './profile__info.css';
import { ProfileLabel } from '../__info-label';
import { ProfileInput } from '../__info-input';

import ProfileInfoRaw from './profile__info.hbs?raw';

interface Props {
  [key: string]: string;
}

export class ProfileInfo extends Block {
  constructor(props: Props) {
    super({
      ...props,

      input: new ProfileInput({
        className: 'input__profile-info',
        placeholder: props.placeholder,
        type: 'text',
        id: props.name,
        name: props.name,
        onChange: (value: boolean) => console.log(`проверка валидаци:${value}`),
      }),
      label: new ProfileLabel({
        className: 'profile__info-label',
        label: props.label,
      }),
    });
  }

  override render() {
    return ProfileInfoRaw;
  }
}
