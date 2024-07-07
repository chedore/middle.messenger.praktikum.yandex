import Block from '../../../core/Block';

export class ProfileInfoInput extends Block {
  protected render(): string {
    return `
      <input
        class="profile__info-input"
        type={{type}}
        name={{name}}
        value={{value}}
      />
    `;
  }
}
