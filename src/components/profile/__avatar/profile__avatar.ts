import Block from '../../../core/Block';

export class ProfileAvatar extends Block {
  protected render(): string {
    return `
      <div class="profile__avatar">
        <img src="avatar.svg" alt="Аватар пользователя" class="profile__img" />
      </div>
    `;
  }
}
