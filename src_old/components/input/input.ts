import Block from '../../core/Block';

interface IProps {
  classes: string;
  placeholder: string;
  name: string;
}

export class Input extends Block {
  constructor(props: IProps) {
    super({
      ...props,
      events: {
        blur: props.onBlur,
      },
    });
  }

  protected render(): string {
    const { classes, placeholder, name } = this.props;
    return `
      <input
        class="${classes}"
        placeholder="${placeholder || ''}"
        name="${name}"
        ref="input"
        required
      />
    `;
  }
}
