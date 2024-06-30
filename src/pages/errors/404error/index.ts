import Block from "../../../core/Block";
import { ErrorTitle, ErrorDescription, ErrorLink } from '../../../components';
import "./404error.css";

import Error404PageRaw from "./404error.hbs";

export class Error404Page extends Block {
  constructor() {
    super({
      title: new ErrorTitle({ label: '404' }),
      description: new ErrorDescription({ label: 'Не туда попали' }),
      link: new ErrorLink({ label: 'Назад к чатам', page: 'messenger' }),
    });
  }

  override render() {
    return this.compile(Error404PageRaw, this.props);
  }
}
