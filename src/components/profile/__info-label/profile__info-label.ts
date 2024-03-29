import Block from '../../../core/Block';

export class ProfileInfoLabel extends Block {
  protected render(): string {
    return `
      <label class="profile__info-label">{{label}}</label>
    `;
  }
}
