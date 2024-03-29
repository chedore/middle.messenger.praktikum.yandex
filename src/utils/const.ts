export const profile_props = [
  {
    label: 'Почта',
    value: 'pochta@yandex.ru',
    type: 'text',
    name: 'email',
  },
  {
    label: 'Логин',
    value: 'ivanivanov',
    type: 'text',
    name: 'login',
  },
  {
    label: 'Имя',
    value: 'Иван',
    type: 'text',
    name: 'first_name',
  },
  {
    label: 'Фамилия',
    value: 'Иванов',
    type: 'text',
    name: 'second_name',
  },
  {
    label: 'Имя в чате',
    value: 'ivanivanov',
    type: 'text',
    name: 'display_name',
  },
  {
    label: 'Телефон',
    value: '+7(909)967-30-30',
    type: 'text',
    name: 'phone',
  },
];

export const login_props = [
  {
    label: 'Логин',
    value: 'ivanivanov',
    type: 'text',
    name: 'login',
  },
  {
    label: 'Пароль',
    value: '11111',
    type: 'password',
    name: 'password',
  },
];

export const cards_props = [
  { name: 'Андрей', message: 'Изображение', time: '10:49', count: '2' },
  { name: 'Киноклуб', message: 'стикер', owner: true, time: '12:00' },
  {
    name: 'Илья',
    message: 'Друзья, у меня для вас особенный выпуск новостей!...',
    time: '15:12',
    count: '4',
  },
  { name: 'Вадим', message: 'Круто!', owner: true, time: 'Пт' },
];
export const ENDPOINT_PAGES = {
  login: 'login',
  register: 'register',
  chat: 'chat',
  404: '404',
  500: '500',
  profile: 'profile',
  list: 'list',
};

export const pages_props = [
  { page: ENDPOINT_PAGES[404] },
  { page: ENDPOINT_PAGES[500] },
  { page: ENDPOINT_PAGES.chat },
  { page: ENDPOINT_PAGES.login },
  { page: ENDPOINT_PAGES.profile },
  { page: ENDPOINT_PAGES.register },
  { page: ENDPOINT_PAGES.list },
];
