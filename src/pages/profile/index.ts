import {
  Button,
  Input,
  ProfileAvatar,
  ProfileInfo
} from '../../components';
import Block from '../../core/Block';
import { ComponentsName } from '../../utils/validationRules';
import './profile.css';

import SettingsPageRaw from './profile.hbs';
import UserService from '../../services/user';
import router from '../../core/Router';
import store, { StoreEvents, User } from '../../core/Store';
import { UpdateProfileRequest } from '../../api/types';
import isBlock from '../../core/BlockGuard';
import { filterEmptyStrings } from '../../tools/helpers';
import { BASE_URL } from '../../api/config';

interface Props {
  isFirstNameError?: boolean;
  isSecondNameError?: boolean;
  user?: User;
  isNewPasswordError?: boolean;
  isPasswordError?: boolean;
  isLoginError?: boolean;
  isPhoneError?: boolean;
  isEmailError?: boolean;
}

export class SettingsPage extends Block {
  constructor() {
    super({
      avatar: new ProfileAvatar({
        download: () => {
          this.initAvatarChange();
        },
        baseUrl: BASE_URL,
      }),
      input_avatar: new Input({
        title: 'Downloud image',
        className: 'input-for-avatar',
        id: 'for_avatar',
        type: 'file',
        onChange: () => {},
        name: ComponentsName.MESSAGE,
      }),

      input_email: new ProfileInfo({
        title: 'Email',
        name: ComponentsName.EMAIL,
        label: 'Почта',
        id: 'email',
        type: 'text',
        onChange: (value: boolean) => {
          this.setProps({ isEmailError: value });
        },
      }),

      input_login: new ProfileInfo({
        title: 'Login',
        name: ComponentsName.LOGIN,
        label: 'Логин',
        id: 'login',
        type: 'text',
        onChange: (value: boolean) => {
          this.setProps({ isLoginError: value });
        },
      }),

      input_first_name: new ProfileInfo({
        title: 'First name',
        name: ComponentsName.FIRST_NAME,
        label: 'Имя',
        id: 'first_name',
        type: 'text',
        onChange: (value: boolean) => {
          this.setProps({ isFirstNameError: value });
        },
      }),

      input_second_name: new ProfileInfo({
        title: 'Second name',
        name: ComponentsName.SECOND_NAME,
        label: 'Фамилия',
        type: 'text',
        id: 'second_name',
        onChange: (value: boolean) => {
          this.setProps({ isSecondNameError: value });
        },
      }),

      input_display_name: new ProfileInfo({
        title: 'Display name',
        name: ComponentsName.DISPLAY_NAME,
        label: 'Имя в чате',
        type: 'text',
        id: 'display_name',
        onChange: () => {},
      }),

      input_phone: new ProfileInfo({
        title: 'Phone',
        name: ComponentsName.PHONE,
        label: 'Телефон',
        id: 'phone',
        type: 'text',
        onChange: (value: boolean) => {
          this.setProps({ isPhoneError: value });
        },
      }),

      input_oldPassword: new ProfileInfo({
        title: 'Old password',
        name: ComponentsName.OLD_PASSWORD,
        label: 'Старый пароль',
        id: 'oldPassword',
        type: 'password',
        onChange: (value: boolean) => {
          this.setProps({ isOldPasswordError: value });
        },
      }),

      input_newPassword: new ProfileInfo({
        title: 'New password',
        name: ComponentsName.NEW_PASSWORD,
        label: 'Новый пароль',
        id: 'newPassword',
        type: 'password',
        onChange: (value: boolean) => {
          this.setProps({ isNewPasswordError: value });
        },
      }),

      button_save: new Button({
        text: 'Save',
        page: 'chat',
        className: 'profile__button',
        type: 'submit',

        onClick: (e) => {
          const target = e!.target as HTMLInputElement;
          const formData = new FormData(target.form!);

          const userObj = {
            [ComponentsName.DISPLAY_NAME]: '',
            [ComponentsName.EMAIL]: '',
            [ComponentsName.FIRST_NAME]: '',
            [ComponentsName.LOGIN]: '',
            [ComponentsName.PHONE]: '',
            [ComponentsName.SECOND_NAME]: '',
          } as UpdateProfileRequest;
          const passwordObj = {
            [ComponentsName.NEW_PASSWORD]: '',
            [ComponentsName.OLD_PASSWORD]: '',
          };

          Array.from(formData.entries()).forEach(
            ([key, value]: [string, string]) => {
              if (
                key === ComponentsName.OLD_PASSWORD || key === ComponentsName.NEW_PASSWORD
              ) {
                passwordObj[key] = value;
              }
              if (key in userObj) {
                userObj[key] = value;
              }
            },
          );

          if (passwordObj.old_password && passwordObj.new_password) {
            const request = {
              oldPassword: passwordObj.old_password,
              newPassword: passwordObj.new_password,
            };
            UserService.changeUserPassword(request)
              .then(() => router.go('/messenger'))
              .catch((error: string) => {
                console.log(`Ошибка запроса: ${error}`);
              });
          }

          if (Object.values(userObj).some((value) => value)) {
            const filterObj = filterEmptyStrings(userObj);
            try {
              UserService.updateUserProfile(filterObj)
                .then(() => router.go('/messenger'))
                .catch((error) => {
                  console.log(`Ошибка при обновлении профиля пользователя: ${error}`);
                });
            } catch (error) {
              console.log(`Ошибка запроса: ${error}`);
            }
          }
        },
      }),
    });
    UserService.getUserInfo();

    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
    });
  }

  override render() {
    return this.compile(SettingsPageRaw, this.props);
  }

  override componentDidUpdate(oldProps: Props, newProps: Props) {
    if (newProps.user && isBlock(this.children.input_first_name)) {
      this.children.input_first_name.setProps({
        value: newProps.user.first_name,
      });
    }
    if (newProps.user && isBlock(this.children.input_second_name)) {
      this.children.input_second_name.setProps({
        value: newProps.user.second_name,
      });
    }
    if (newProps.user && isBlock(this.children.input_display_name)) {
      this.children.input_display_name.setProps({
        value: newProps.user.display_name,
      });
    }
    if (newProps.user && isBlock(this.children.input_email)) {
      this.children.input_email.setProps({
        value: newProps.user.email,
      });
    }
    if (newProps.user && isBlock(this.children.input_phone)) {
      this.children.input_phone.setProps({
        value: newProps.user.phone,
      });
    }
    if (newProps.user && isBlock(this.children.input_login)) {
      this.children.input_login.setProps({
        value: newProps.user.login,
      });
    }

    if (
      oldProps.isFirstNameError !== newProps.isFirstNameError && isBlock(this.children.input_first_name)
    ) {
      this.children.input_first_name.setProps({
        isError: newProps.isFirstNameError,
      });
    }
    if (
      oldProps.isSecondNameError !== newProps.isSecondNameError && isBlock(this.children.input_second_name)
    ) {
      this.children.input_second_name.setProps({
        isError: newProps.isSecondNameError,
      });
    }
    if (
      oldProps.isEmailError !== newProps.isEmailError && isBlock(this.children.input_email)
    ) {
      this.children.input_email.setProps({ isError: newProps.isEmailError });
    }
    if (
      oldProps.isPhoneError !== newProps.isPhoneError && isBlock(this.children.input_phone)
    ) {
      this.children.input_phone.setProps({ isError: newProps.isPhoneError });
    }
    if (
      oldProps.isLoginError !== newProps.isLoginError && isBlock(this.children.input_login)
    ) {
      this.children.input_login.setProps({ isError: newProps.isLoginError });
    }
    if (
      oldProps.isPasswordError !== newProps.isPasswordError && isBlock(this.children.input_oldPassword)
    ) {
      this.children.input_oldPassword.setProps({
        isError: newProps.isPasswordError,
      });
    }
    if (
      oldProps.isNewPasswordError !== newProps.isNewPasswordError && isBlock(this.children.input_newPassword)
    ) {
      this.children.input_newPassword.setProps({
        isError: newProps.isNewPasswordError,
      });
    }
    if (newProps.user && isBlock(this.children.avatar)) {
      this.children.avatar.setProps({ url: newProps.user.avatar });
    }

    return true;
  }

  public initAvatarChange(): void {
    const avatarInput = document.getElementById('for_avatar') as HTMLInputElement;
    avatarInput.click();

    avatarInput?.addEventListener('change', this.handleAvatarChange.bind(this));
  }

  private handleAvatarChange() {
    const avatarInput = document.getElementById('for_avatar') as HTMLInputElement;
    if (!avatarInput.files || avatarInput.files.length === 0) {
      return;
    }
    const formData = new FormData();
    formData.append('avatar', avatarInput.files[0]);

    UserService.updateUserAvatar(formData)
      .then((avatar) => {
        const avatarImage = document.getElementById('avatarImage') as HTMLImageElement;

        avatarImage.src = `${BASE_URL}/resources/${JSON.parse(avatar.response).avatar}`;
      })
      .catch((error) => {
        console.error('Ошибка при обновлении аватара:', error);
      });
  }
}
