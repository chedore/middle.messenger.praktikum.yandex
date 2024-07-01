import Block from '../../core/Block';
import { Button } from '../button';
import ModalUserDeletetRaw from './modalUserDelete.hbs';
import './modalUserDelete.css';
import store, { StoreEvents, User } from '../../core/Store';
import { UserItem } from '../searchUserItem';
import ChatController from '../../services/chat';

interface Props {
  closeModal: () => void;
}

export class ModalUserDelete extends Block {
  constructor(props: Props) {
    super({
      ...props,
      button_close: new Button({
        onClick: props.closeModal,
        text: 'close',
      }),
      users_list: new UserItem({}),
    });

    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
    });
  }

  override render() {
    return this.compile(ModalUserDeletetRaw, this.props);
  }

  componentDidUpdate(
    _oldProps: Props,
    newProps: { usersInCurrentChat: User[] },
  ): boolean {
    if (newProps.usersInCurrentChat) {
      var currentState = store.getState();
      this.children.usersList = newProps.usersInCurrentChat?.map((user) => {
        const handler = () => {
          ChatController.DeleteUserFromChat({
            users: [user.id],
            chatId: currentState.currentChat!,
          })
            .then(() => {
              currentState = store.getState();
              ChatController.getUsersInChat(currentState.currentChat!);
            })
            .catch((error) => {
              console.log(`Ошибка: ${error}`);
            });
        };
        return new UserItem({
          login: user.login,
          handler: handler,
          text: 'Delete user',
        });
      });
    }

    return true;
  }
}
