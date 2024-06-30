import Block from '../../../core/Block';
import './profile__info-input.css';
import { Input } from '../../input';

import ProfileInputRaw from './profile__info-input.hbs';
import { ComponentsName } from "../../../utils/validationRules";
import isBlock from "../../../core/BlockGuard";

interface Props {
  type: string;
  name: ComponentsName;
  id: number | string;
  onChange: (value?: boolean) => void;
  title?: string;
  className?: string;
  value?: string;
}

export class ProfileInput extends Block {
  constructor(props: Props) {
    super({
      ...props,
      input: new Input({
        type: props.type,
        id: props.id,
        name: props.name,
        onChange: props.onChange,
        value: props.value,
      }),
    });
  }

  override render() {
    return this.compile(ProfileInputRaw, this.props);
  }

  override componentDidUpdate(
    _oldProps: unknown,
    newProps: { value: string }
  ): boolean {
    if (newProps.value && isBlock(this.children.input)) {
      this.children.input.setProps({ value: newProps.value });
    }

    return true;
  }
}
