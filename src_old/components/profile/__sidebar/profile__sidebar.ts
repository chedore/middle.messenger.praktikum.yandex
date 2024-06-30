import Block from '../../../core/Block';

export class ProfileButtonChat extends Block {
  protected render(): string {
    return `
      <img
      class="button profile__sidebar-retrieval"
      src="retrieval-left.svg"
      alt="Меню"
      />
    `;
  }
}
