import Block from "../../../core/Block";
import "./chat__card.css";

import ChatCardRaw from "./chat__card.hbs";

interface Props {
  click: () => void;
  name: string;
  lastMessage?: string;
  unreadCount: number;
}

export class ChatCard extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        click: () => {
          props.click();
        },
      },
    });
  }

  override render() {
    return this.compile(ChatCardRaw, this.props);
  }
}
