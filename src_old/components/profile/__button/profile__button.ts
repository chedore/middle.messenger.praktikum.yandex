import Block from '../../../core/Block';

export class ProfileButtonSave extends Block {
  protected render(): string {
    return `
      {{{ Button label=this.label type="submit" style="profile__button" onClick=this.onClick }}}
    `;
  }
}
