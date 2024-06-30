import Block from "../../../core/Block";
import ProfileAvatarRaw from "./profile__avatar.hbs";
import "./profile__avatar.css";

interface Props {
  download: () => void;
  baseUrl: string;
}

export class ProfileAvatar extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        click: () => {
          props.download();
        },
      },
    });
  }

  render() {
    return this.compile(ProfileAvatarRaw, this.props);
  }
}
