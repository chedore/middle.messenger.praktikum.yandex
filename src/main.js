import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';

const pages = {
  'list': [ Pages.ListPage],
  'login': [ Pages.LoginPage, {login: 'ivanivanov', password: '11111'}],
  'register': [ Pages.RegisterPage, {
    email: 'pochta@yandex.ru', 
    login: 'ivanivanov',
    first_name: 'Иван',
    second_name: 'Иванов',
    phone: '+7(909)967-30-30',
    password: '11111'
  }],
  'chat': [ Pages.ChatPage ,{login: 'ivanivanov'}],
  '404': [ Pages.Page404 ],
  '500': [ Pages.Page500 ],
  'profile': [ Pages.ProfilePage ],
};

Object.entries(Components).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page) {
  const [ source, context ] = pages[page];
  const container = document.getElementById('app');
  container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('list'));

document.addEventListener('click', e => {
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
