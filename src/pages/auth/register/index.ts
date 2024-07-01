import { Button, FormAuthElement } from '../../../components';
import Block from '../../../core/Block';
import './register.css';

import RegistrPageRaw from './register.hbs';
import { ComponentsName } from '../../../utils/validationRules';
import UserService from '../../../services/user';
import router from '../../../core/Router';
import AuthService from '../../../services/auth';
import { SignUpRequest } from '../../../api/types';
import isBlock from '../../../core/BlockGuard';
import { submit } from '../../../utils/formValidator';

interface Props {
  [key: string]: unknown;
}

export class RegistrationPage extends Block {
  constructor(props: Props) {
    super({
      ...props,

      input_email: new FormAuthElement({
        title: 'Почта',
        name: ComponentsName.EMAIL,
        id: 'email',
        type: 'text',
        onChange: (value: boolean) => {
          this.setProps({ isEmailError: value });
        },
      }),
      input_login: new FormAuthElement({
        title: 'Логин',
        name: ComponentsName.LOGIN,
        id: 'login',
        type: 'text',
        onChange: (value: boolean) => {
          this.setProps({ isLoginError: value });
        },
      }),
      input_first_name: new FormAuthElement({
        title: 'Имя',
        name: ComponentsName.FIRST_NAME,
        id: 'first_name',
        type: 'text',
        onChange: (value: boolean) => {
          this.setProps({ isFirstNameError: value });
        },
      }),
      input_second_name: new FormAuthElement({
        title: 'Фамилия',
        name: ComponentsName.SECOND_NAME,
        type: 'text',
        id: 'second_name',
        onChange: (value: boolean) => {
          this.setProps({ isSecondNameError: value });
        },
      }),
      input_password: new FormAuthElement({
        title: 'Пароль',
        name: ComponentsName.PASSWORD,
        id: 'password',
        type: 'password',
        onChange: (value: boolean) => {
          this.setProps({ isPasswordError: value });
        },
      }),
      input_phone: new FormAuthElement({
        title: 'Телефон',
        name: ComponentsName.PHONE,
        id: 'phone',
        type: 'text',
        onChange: (value: boolean) => {
          this.setProps({ isPhoneError: value });
        },
      }),
      button_register: new Button({
        text: 'Зарегистрироваться',
        page: 'chat',
        className: 'button__form-auth',
        type: 'submit',
        onClick: (e: SubmitEvent) => {
          const valid = submit(e);
          if (valid) {
            const target = e!.target as HTMLInputElement;
            const formData = new FormData(target.form!);

            const userObj = {} as SignUpRequest;

            Array.from(formData.entries()).forEach(
              ([key, value]: [string, string]) => {
                userObj[key] = value;
              }
            );

            AuthService.createUser(userObj)
              .then(() => UserService.getUserInfo())
              .then(() => {
                router.go('/messenger');
              })
              .catch(error => {
                console.error('Ошибка при регистрации пользователя:', error);
              });
          }
        },
      }),
      button_login: new Button({
        text: 'Войти',
        page: 'login',
        className: 'form-auth__link',
        type: 'submit',
        onClick: () => {
          router.go('/');
        },
        id: 'login',
      }),

    });
  }

  override render() {
    return this.compile(RegistrPageRaw, this.props);
  }

  componentDidUpdate(oldProps: Props, newProps: Props) {
    if (
      oldProps.isEmailError !== newProps.isEmailError &&
      isBlock(this.children.input_email)
    ) {
      this.children.input_email.setProps({ isError: newProps.isEmailError });
    }
    if (
      oldProps.isLoginError !== newProps.isLoginError &&
      isBlock(this.children.input_login)
    ) {
      this.children.input_login.setProps({ isError: newProps.isLoginError });
    }
    if (
      oldProps.isFirstNameError !== newProps.isFirstNameError &&
      isBlock(this.children.input_first_name)
    ) {
      this.children.input_first_name.setProps({
        isError: newProps.isFirstNameError,
      });
    }
    if (
      oldProps.isSecondNameError !== newProps.isSecondNameError &&
      isBlock(this.children.input_second_name)
    ) {
      this.children.input_second_name.setProps({
        isError: newProps.isSecondNameError,
      });
    }
    if (
      oldProps.isPasswordError !== newProps.isPasswordError &&
      isBlock(this.children.input_password)
    ) {
      this.children.input_password.setProps({
        isError: newProps.isPasswordError,
      });
    }
    if (
      oldProps.isPhoneError !== newProps.isPhoneError &&
      isBlock(this.children.input_phone)
    ) {
      this.children.input_phone.setProps({ isError: newProps.isPhoneError });
    }

    return true;
  }
}
