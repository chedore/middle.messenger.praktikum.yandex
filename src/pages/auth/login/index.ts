import Block from '../../../core/Block';
import { Button } from '../../../components';
import { submit } from '../../../utils/formValidator';
import './login.css';

import LoginPageRaw from './login.hbs?raw';

interface Props {
  [key: string]: unknown;
}

export class LoginPage extends Block {
  constructor(props: Props) {
    super({
      ...props,
      button_primary: new Button({
        text: 'Login',
        page: 'login',
        className: 'button__form-auth',
        type: 'submit',
        submit,
        id: 'login-button',
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
