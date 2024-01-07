import Handlebars from 'handlebars';
export { default as ListChatCards } from './chat__card-list.hbs?raw';

Handlebars.registerHelper('chats', () => {
    return [
        {name: 'cat-1', avatar: 'cat1'},
        {name: 'cat-2', avatar: 'cat2'},
        {name: 'cat-3', avatar: 'cat3'},
    ]
})