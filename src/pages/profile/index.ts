import Block from '../../core/Block';
import { Button, ProfileInfo } from '../../components';
import { submit } from '../../utils/formValidator';
import './profile.css';

import ProfilePageRaw from './profile.hbs?raw';

interface Props {
  [key: string]: unknown;
}

export class ProfilePage extends Block {
  constructor(props: Props) {
    super({
      ...props,
      button_sidebar: new Button({
        className: 'button profile__sidebar-retrieval',
      }),
      button_save: new Button({
        className: 'button profile__button',
        text: 'Сохранить',
        submit,
      }),

      profileEmail: new ProfileInfo({
        placeholder: 'pochta@yandex.ru',
        name: 'email',
        label: 'Почта',
      }),
      profileLogin: new ProfileInfo({
        placeholder: 'ivanivanov',
        name: 'login',
        label: 'Логин',
      }),
      profileFirst_name: new ProfileInfo({
        placeholder: 'Иван',
        name: 'first_name',
        label: 'Имя',
      }),
      profileSecond_name: new ProfileInfo({
        placeholder: 'Иванов',
        name: 'second_name',
        label: 'Фамилия',
      }),
      profileDisplay_name: new ProfileInfo({
        placeholder: 'ivanivanov',
        name: 'display_name',
        label: 'Имя в чате',
      }),
      profilePhone: new ProfileInfo({
        placeholder: '+7(909)967-30-30',
        name: 'phone',
        label: 'Телефон',
      }),
    });
  }

  override render() {
    return ProfilePageRaw;
  }
}
