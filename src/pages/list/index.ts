import Block from '../../core/Block';
import './list.css';

import ListPageRaw from './list.hbs?raw';

interface Props {
  [key: string]: unknown;
}

export class ListPage extends Block {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  componentDidUpdate(oldProps: Props, newProps: Props) {
    if (oldProps.isLoginError !== newProps.isLoginError) {
      this.children.input_login.setProps({ isError: newProps.isLoginError });
    }
    if (oldProps.isPasswordError !== newProps.isPasswordError) {
      this.children.input_password.setProps({
        isError: newProps.isPasswordError,
      });
    }
    return true;
  }

  override render() {
    return ListPageRaw;
  }
}
