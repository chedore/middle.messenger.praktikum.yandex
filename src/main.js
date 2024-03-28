import Handlebars from "handlebars";
import * as Components from "./components";
import { registerComponent } from './core/resgiterComponent';
import { navigate } from './core/navigate';


Handlebars.registerPartial('FormAuth', Components.FormAuth);
registerComponent('FormAuthTitle', Components.FormAuthTitle);
registerComponent('FormAuthElement', Components.FormAuthElement);
registerComponent('FormAuthButton', Components.FormAuthButton);
registerComponent('FormAuthLink', Components.FormAuthLink);

registerComponent('Input', Components.Input);
registerComponent('ErrorLine', Components.ErrorLine);
registerComponent('Button', Components.Button);

registerComponent('ErrorTitle', Components.ErrorTitle);
registerComponent('ErrorDescription', Components.ErrorDescription);
registerComponent('ErrorLink', Components.ErrorLink);

registerComponent('ProfileButtonChat', Components.ProfileButtonChat);
registerComponent('ProfileAvatar', Components.ProfileAvatar);
registerComponent('ProfileButtonSave', Components.ProfileButtonSave);
registerComponent('ProfileInfoInput', Components.ProfileInfoInput);
registerComponent('ProfileInfoLabel', Components.ProfileInfoLabel);
registerComponent('ProfileInfo', Components.ProfileInfo);

registerComponent('ChatHeader', Components.ChatHeader);
registerComponent('ChatLink', Components.ChatLink);
registerComponent('ChatButton', Components.ChatButton);
registerComponent('ChatCard', Components.ChatCard);
registerComponent('ListChatCards', Components.ListChatCards);
registerComponent('ChatFooter', Components.ChatFooter);

registerComponent('ReferenceButton', Components.ReferenceButton);
registerComponent('ReferenceLink', Components.ReferenceLink);
registerComponent('ReferenceLinks', Components.ReferenceLinks);

document.addEventListener('DOMContentLoaded', () => navigate('list'));
