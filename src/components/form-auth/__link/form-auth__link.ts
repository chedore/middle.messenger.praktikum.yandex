import Block from '../../../core/Block';

interface IProps {
  label: string;
}

export class FormAuthLink extends Block {
  constructor(props: IProps) {
    super(props);
  }

  protected render(): string {
    const { label } = this.props;
    return `
      {{{ Button label="${label}" type="link" style="form-auth__link" }}}
    `;
  }
}
