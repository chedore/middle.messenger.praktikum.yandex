import Block from '../../../core/Block';

export class ReferenceLink extends Block {
  protected render(): string {
    return `
      <li class="reference__link">
        {{{ ReferenceButton label=this.label type="submit" onClick=this.onClick}}}
      </li>
    `;
  }
}
