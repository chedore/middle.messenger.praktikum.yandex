import Block from '../../core/Block';
import './profile.css';

import ProfilePageRaw from './profile.hbs?raw';

export class ProfilePage extends Block {
  constructor() {
    super({});
  }

  override render() {
    return ProfilePageRaw;
  }
}
