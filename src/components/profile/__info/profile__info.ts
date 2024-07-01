import Block from '../../../core/Block';
import './profile__info.css';
import { ProfileLabel } from '../__info-label';
import { ProfileInput } from '../__info-input';

import ProfileInfoRaw from './profile__info.hbs';
import { ComponentsName } from '../../../utils/validationRules';
import isBlock from '../../../core/BlockGuard';

interface Props {
  type: string;
  name: ComponentsName;
  id: number | string;
  label: string;
  onChange: (value?: boolean) => void;
  title?: string;
  className?: string;
  value?: string;
}

export class ProfileInfo extends Block {
  constructor(props: Props) {
    super({
      ...props,

      input: new ProfileInput({
        className: 'input__profile-info',
        type: 'text',
        id: props.id,
        name: props.name,
        onChange: props.onChange,
        value: props.value,
      }),
      label: new ProfileLabel({
        className: 'profile__info-label',
        label: props.label,
      }),
    });
  }

  override render() {
    return this.compile(ProfileInfoRaw, this.props);
  }

  override componentDidUpdate(
    _oldProps: unknown,
    newProps: { value: string }
  ): boolean {
    if (newProps.value && isBlock(this.children.input)) {
      this.children.input.setProps({ value: newProps.value });
    }
    if (newProps.value && isBlock(this.children.label)) {
      this.children.label.setProps({ value: newProps.value });
    }

    return true;
  }
}
