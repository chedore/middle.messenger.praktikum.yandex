/* eslint-disable no-console */
/* eslint-disable brace-style */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable semi */
import Block from '../../../core/Block';
import { ChatCard } from '../__card';
import './chat__sidebar.css';
import store, { ChatInfo, StoreEvents } from '../../../core/Store';

import ChatSidebarRaw from './chat__sidebar.hbs';
import UserController from '../../../services/user';
import MyWebSocket from '../../../tools/webSocket';

import { Button } from '../../button';
import { ModalCreateChat } from '../../modalCreateChat';
import ChatController from '../../../services/chat';
import isBlock from '../../../core/BlockGuard';

interface Props {
  [key: string]: unknown;
}

export class ChatSidebar extends Block {
  constructor(props: Props) {
    super({
      ...props,
    });

    try {
      ChatController.getUsersChats();
    } catch (error) {
      console.log(`Ошибка запроса: ${error}`);
    }

    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
    });
  }

  override init() {
    const openCreateChatModal = () => {
      if (isBlock(this.children.modalCreatechat)) {
        this.children.modalCreatechat.setProps({ isOpen: true });
      }
    };

    const closeCreateChatModal = () => {
      if (isBlock(this.children.modalCreatechat)) {
        this.children.modalCreatechat.setProps({ isOpen: false });
      }
    };

    this.children.modalCreatechat = new ModalCreateChat({
      closeModal: closeCreateChatModal,
    });

    this.children.button_create_chat = new Button({
      text: 'Создать чат',
      page: 'chat',
      className: 'button__form-auth',
      onClick: openCreateChatModal,
    });
  }

  override render() {
    return this.compile(ChatSidebarRaw, this.props);
  }

  componentDidUpdate(
    _oldProps: Props,
    newProps: { chats: ChatInfo[] },
  ): boolean {
    if (newProps.chats) {
      this.children.chatsList = newProps.chats?.map(
        (chat) =>
          new ChatCard({
            name: chat.title,
            lastMessage: chat.last_message?.content,
            unreadCount: chat.unread_count,
            click: async () => {
              store.dispatch('currentChat', chat.id);
              try {
                await ChatController.chatTokenId(chat.id);

                await UserController.getUserInfo();
              } catch (error) {
                console.log(`Ошибка запроса: ${error}`);
              }

              const currentStore = store.getState();
              const socket = new MyWebSocket(
                `wss://ya-praktikum.tech/ws/chats/${currentStore.user.id}/${currentStore.currentChat}/${currentStore.currentChatToken}`,
              );
              store.dispatch('currentSocket', socket);

              socket.on('messages', (data) => {
                if (Array.isArray(data)) { store.dispatch('messages', data) }
                else {
                  const lastMessages = store.getState().messages;
                  const newMessagesToDispatch = [data, ...lastMessages!];
                  if (lastMessages) {
                    store.dispatch('messages', newMessagesToDispatch);
                  }
                }
              });

              setTimeout(() => {
                socket.getOldMessages();
              }, 2000);

              socket.recieveMessages();

              const currentState = store.getState();
              try { ChatController.getUsersInChat(currentState.currentChat!); }
              catch (error) { console.log(`Ошибка запроса: ${error}`); }
            },
          }),
      );
    }

    return true;
  }
}
