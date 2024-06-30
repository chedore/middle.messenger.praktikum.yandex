import Block from '../../../core/Block';
import './profile__info-label.css';

import ProfileLabelRaw from './profile__info-label.hbs';

interface Props {
  [key: string]: string;
}

export class ProfileLabel extends Block {
  constructor(props: Props) {
    super({ ...props });
  }

  override render() {
    return this.compile(ProfileLabelRaw, this.props);
  }
}
