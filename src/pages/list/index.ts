import Block from '../../core/Block';
import './list.css';

import ListPageRaw from './list.hbs?raw';

export class ListPage extends Block {
  constructor() {
    super({});
  }

  override render() {
    return ListPageRaw;
  }
}
