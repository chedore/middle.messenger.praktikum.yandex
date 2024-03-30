import Block from '../../core/Block';

interface IProps {
  type: 'submit' | 'button';
  label: string;
  page?: string;
  style?: string;
  onClick?: () => void;
}

export class Button extends Block {
  constructor(props: IProps) {
    super(props);
  }

  protected init(): void {
    this.props.events = {
      click: this.props.onClick,
    };
  }

  protected render(): string {
    const { type, label, page, style } = this.props;
    return `
      <button type="button" class="button ${style ? `${style}` : ''}"
        type=${type}
        ${page ? `page="${page}"` : ''}
      >
        ${label}
      </button>
    `;
  }
}
