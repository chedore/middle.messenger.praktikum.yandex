import Block from '../../core/Block';
import InputRaw from './input.hbs?raw';
import { validators } from '../../utils/validators';
import { ComponentsName } from '../../utils/validationRules';

interface Props {
  [key: string]: unknown;
}

export class Input extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        blur: (e: FocusEvent) => {
          const target = e.target as HTMLInputElement;
          const name = props.name as ComponentsName;
          const onChange = props.onChange as (arg: boolean) => void;

          const isValid = validators(name, target.value);
          onChange(isValid);
        },
      },
    });
  }

  render() {
    return InputRaw;
  }
}
