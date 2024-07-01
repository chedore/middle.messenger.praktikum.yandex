import { Button, FormAuthElement } from '../../../components';
import Block from '../../../core/Block';
import './login.css';

import LoginPageRaw from './login.hbs';
import { ComponentsName } from '../../../utils/validationRules';
import router from '../../../core/Router';
import UserService from '../../../services/user';
import AuthService from '../../../services/auth';
import { LoginRequestData } from '../../../api/types';
import isBlock from '../../../core/BlockGuard';
import { submit } from '../../../utils/formValidator';

interface Props {
  [key: string]: unknown;
}

export class LoginPage extends Block {
  constructor(props: Props) {
    super({
      ...props,
      input_login: new FormAuthElement({
        title: 'Логин',
        name: ComponentsName.LOGIN,
        id: 'login',
        type: 'text',
        onChange: (value: boolean) => {
          this.setProps({ isLoginError: value });
        },
      }),
      input_password: new FormAuthElement({
        title: 'Password',
        name: ComponentsName.PASSWORD,
        type: 'password',
        id: 'password',
        onChange: (value: boolean) => {
          this.setProps({ isPasswordError: value });
        },
      }),

      button_login: new Button({
        text: 'Авторизоваться',
        page: 'login',
        className: 'button__form-auth',
        type: 'submit',
        onClick: (e: SubmitEvent) => {
          const valid = submit(e);
          if (valid) {
            const target = e!.target as HTMLInputElement;
            const formData = new FormData(target.form!);

            const userObj = {} as LoginRequestData;

            Array.from(formData.entries()).forEach(
              ([key, value]: [string, string]) => {
                userObj[key] = value;
              }
            );

            AuthService.signinUser(userObj)
              .then(() => UserService.getUserInfo())
              .then(() => {
                router.go('/messenger');
              })
              .catch(error => {
                console.error('Ошибка при авторизации пользователя:', error);
              });
          }
        },
        id: 'login-button',
      }),
      button_register: new Button({
        text: 'Нет аккаунта?',
        page: 'register',
        className: 'form-auth__link',
        id: 'register',
        onClick: () => {
          router.go('/sign-up');
        },
      }),
    });
  }

  componentDidUpdate(oldProps: Props, newProps: Props) {
    if (
      oldProps.isLoginError !== newProps.isLoginError &&
      isBlock(this.children.input_login)
    ) {
      this.children.input_login.setProps({ isError: newProps.isLoginError });
    }
    if (
      oldProps.isPasswordError !== newProps.isPasswordError &&
      isBlock(this.children.input_password)
    ) {
      this.children.input_password.setProps({
        isError: newProps.isPasswordError,
      });
    }
    return true;
  }

  override render() {
    return this.compile(LoginPageRaw, this.props);
  }
}
