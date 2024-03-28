import Block from '../../../core/Block';
interface IProps {
  label: string;
}

export class ProfileButtonSave extends Block {
  constructor(props: IProps) {
    super(props);
  }

  protected render(): string {
    const { label } = this.props;
    return `
      {{{ Button label="${label}" type="button" style="profile__button" }}}
    `;
  }
}
