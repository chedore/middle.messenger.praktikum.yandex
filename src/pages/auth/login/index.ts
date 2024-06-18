import Block from '../../../core/Block';
import { Button, FormAuthElement } from '../../../components';
import { submit } from '../../../utils/formValidator';
import './login.css';
import router from "../../../core/Router";

import LoginPageRaw from './login.hbs?raw';

interface Props {
  [key: string]: unknown;
}

export class LoginPage extends Block {
  constructor(props: Props) {
    super({
      ...props,
      login: new FormAuthElement({
        label: 'Login',
        type: 'text',
        name: 'login',
      }),
      password: new FormAuthElement({
        label: 'Пароль',
        type: 'text',
        name: 'password',
      }),
      button_login: new Button({
        text: 'Авторизоваться',
        page: 'login',
        className: 'button__form-auth',
        type: 'submit',
        submit,
        id: 'login-button',
      }),
      button_register: new Button({
        text: 'Нет аккаунта?',
        page: 'register',
        className: 'form-auth__link',
        type: 'submit',
        onChange: () => {
          router.go("/sign-up");
        },
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
    return LoginPageRaw;
  }
}
