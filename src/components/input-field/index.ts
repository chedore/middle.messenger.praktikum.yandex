import Block from "../../core/Block";

import InputFieldRaw from "./input-field.hbs";
import { Input } from "../input";
import { ComponentsName } from "../../utils/validationRules";
import isBlock from "../../core/BlockGuard";

interface InputFieldProps {
  type: string;
  name: ComponentsName;
  id: number | string;
  onChange: (value?: boolean) => void;
  title?: string;
  className?: string;
  value?: string;
}

export class InputField extends Block {
  constructor(inputFieldProps: InputFieldProps) {
    super({
      ...inputFieldProps,
      input: new Input({
        type: inputFieldProps.type,
        id: inputFieldProps.id,
        name: inputFieldProps.name,
        onChange: inputFieldProps.onChange,
        value: inputFieldProps.value,
      }),
    });
  }

  override render() {
    return this.compile(InputFieldRaw, this.props);
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
