import Block from '../../../core/Block';

interface IProps {
  label: string;
  type: 'password' | 'test';
  name: string;
  value: string;
}

export class ProfileInfo extends Block {
  constructor(props: IProps) {
    super(props);
  }
  protected render(): string {
    const { label, type, name, value } = this.props;
    return `
      <div class="profile__info">
        {{{ ProfileInfoLabel label="${label}"}}}
        {{{ ProfileInfoInput type="${type}" name="${name}" value="${value}" }}}
      </div>
    `;
  }
}
