import { ProfileSettings, ChatSidebar, ChatHeader } from '../../components';
import Block from '../../core/Block';

import './chat.css';
import ChatPageRaw from './chat.hbs';
import UserService from '../../services/user';
import store, { StoreEvents, User } from '../../core/Store';
import router from '../../core/Router';
import { MessageBlock } from '../../components/messageBlock';
import isBlock from '../../core/BlockGuard';
import { BASE_URL } from '../../api/config';

interface Props {
  [key: string]: unknown;
}

export class ChatPage extends Block {
  constructor() {
    super({
      children: {},
      header: new ChatHeader({}),
      profile: new ProfileSettings({
        className: 'profile-settings',
        navigate: () => {
          router.go('/settings');
        },
        baseUrl: BASE_URL,
      }),

      sidebar: new ChatSidebar({}),
      messageBlock: new MessageBlock({}),
    });
    try {
      UserService.getUserInfo();
    } catch (error) {
      alert(`Ошибка запроса: ${error}`);
    }

    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
    });
  }

  override componentDidUpdate(_oldProps: Props, newProps: { user?: User }) {
    if (newProps.user && isBlock(this.children.profile)) {
      this.children.profile.setProps({ url: newProps.user.avatar });
    }
    return true;
  }

  render() {
    return this.compile(ChatPageRaw, this.props);
  }
}
