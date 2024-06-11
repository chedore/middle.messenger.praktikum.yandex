import Block from '../../../core/Block';
import './register.css';
import { Button, FormAuthElement } from '../../../components';
import { submit } from '../../../utils/formValidator';

import RegisterPageRaw from './register.hbs?raw';

interface Props {
  [key: string]: unknown;
}

export class RegisterPage extends Block {
  constructor(props: Props) {
    super({
      ...props,
      email: new FormAuthElement({
        label: 'Почта',
        type: 'text',
        name: 'email',
      }),
      login: new FormAuthElement({
        label: 'Логин',
        type: 'text',
        name: 'login',
      }),
      first_name: new FormAuthElement({
        label: 'Имя',
        type: 'text',
        name: 'first_name',
      }),
      second_name: new FormAuthElement({
        label: 'Фамилия',
        type: 'text',
        name: 'second_name',
      }),
      display_name: new FormAuthElement({
        label: 'Имя в чате',
        type: 'text',
        name: 'display_name',
      }),
      phone: new FormAuthElement({
        label: 'Телефон',
        type: 'text',
        name: 'phone',
      }),
      button_register: new Button({
        text: 'Зарегистрироваться',
        page: 'login',
        className: 'button__form-auth',
        type: 'submit',
        submit,
        id: 'login-button',
      }),
      button_login: new Button({
        text: 'Войти',
        page: 'register',
        className: 'form-auth__link',
        type: 'submit',
        onChange: () => window.navigate('login'),
        id: 'register-button',
      }),
    });
  }

  componentDidUpdate(oldProps: Props, newProps: Props) {
    if (oldProps.isLoginError !== newProps.isLoginError) {
      this.children.input_login.setProps({ isError: newProps.isLoginError });
    }
    if (oldProps.isPasswordError !== newProps.isPasswordError) {
      this.children.input_password.setProps({
        isError: newProps.isPasswordError,
      });
    }
    return true;
  }

  override render() {
    return RegisterPageRaw;
  }
}
