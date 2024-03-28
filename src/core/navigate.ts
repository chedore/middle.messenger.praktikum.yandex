import * as Pages from '../pages';

const pages = {
  login: Pages.LoginPage,
  register: Pages.RegisterPage,
  '404': Pages.Page404,
  '500': Pages.Page500,
  profile: Pages.ProfilePage,
  chat: Pages.ChatPage,
  list: Pages.ListPage,
};

export function navigate(page: string) {
  const app = document.getElementById('app');

  const Component = pages[page];
  const component = new Component();
  if (app) {
    app.innerHTML = '';
    app.appendChild(component.getContent());
  }
}
