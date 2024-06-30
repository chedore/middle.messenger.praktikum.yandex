import Block from "../../core/Block";
import { Button } from "../button";

import ModaltRaw from "./modalUserAdd.hbs";
import "./modalUserAdd.css";
import { InputField } from "../input-field";
import UserController from "../../services/user";
import store, { SearchAddUser, StoreEvents } from "../../core/Store";
import { UserItem } from "../searchUserItem";
import { ComponentsName } from "../../utils/validationRules";
import ChatController from "../../services/chat";

interface Props {
  closeModal: () => void;
}

export class Modal extends Block {
  constructor(props: Props) {
    super({
      ...props,
      button_close: new Button({
        onClick: props.closeModal,
        text: "close",
      }),
      button_search: new Button({
        text: "Поиск",
        className: "button__form-auth",
        onClick: () => {
          const input = document.querySelector(
            "#find-user"
          ) as HTMLInputElement;

          try {
            UserController.userSearch({ login: input.value });
          } catch (error) {
            alert(`Ошибка запроса: ${error}`);
          }
        },
      }),
      input_find_user: new InputField({
        onChange: () => {},
        id: "find-user",
        type: "input",
        name: ComponentsName.MESSAGE,
      }),
    });
    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
    });
  }

  override render() {
    return this.compile(ModaltRaw, this.props);
  }

  componentDidUpdate(
    _oldProps: Props,
    newProps: { usersSearchResult: SearchAddUser[] }
  ): boolean {
    if (newProps.usersSearchResult) {
      const currentState = store.getState();
      this.children.usersList = newProps.usersSearchResult?.map(user => {
        const handler = () => {
          try {
            ChatController.addUsersToChat({
              users: [user.id],
              chatId: currentState.currentChat!,
            })
              .then(() => {
                try {
                  const currentState = store.getState();
                  ChatController.getUsersInChat(currentState.currentChat!);
                } catch (error) {
                  alert(`Ошибка при получении пользователей в чате: ${error}`);
                }
              })
              .catch(error => {
                alert(`Ошибка при добавлении пользователей в чат: ${error}`);
              });
          } catch (error) {
            alert(`Неожиданная ошибка при добавлении пользователей: ${error}`);
          }
        };
        return new UserItem({
          login: user.login,
          handler: handler,
          text: "Add user",
        });
      });
    }

    return true;
  }
}
