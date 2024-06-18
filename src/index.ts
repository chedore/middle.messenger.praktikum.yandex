import * as Pages from './pages';
import Block from './core/Block';
import router from './core/Router';
import { Store } from './core/Store';

interface PageStructure {
  [key: string]: [typeof Block];
}

// const pages: PageStructure = {
//   login: [Pages.LoginPage],
//   register: [Pages.RegisterPage],
//   list: [Pages.ListPage],
//   404: [Pages.Error404Page],
//   500: [Pages.Error500Page],
//   profile: [Pages.ProfilePage],
//   chart: [Pages.ChatPage],
// };

// const router = new Router('#app');
// window.router = router;

// window.store = new Store({
//   isLoading: false,
//   loginError: null,
//   cats: [],
//   user: null,
//   selectedCard: null
// });çC


router.use('/', Pages.LoginPage)
.use('/sign-up', Pages.RegisterPage)
.use('*', Pages.Error404Page)
.start();


// function navigate(page: string): void {
//   const [NewPage] = pages[page];
//   const block = new NewPage({});
//   const container = document.getElementById('app')!;
//   container.replaceChildren(block.getContent()!);
// }

// window.navigate = navigate;

// const block = new Pages.ListPage({});
// const container = document.getElementById('app')!;

// container.append(block.getContent()!);

// document.addEventListener('DOMContentLoaded', () => {
//   const changePasswordBtn = document.getElementById('changePasswordBtn');
//   const settingsPasswordDiv = document.querySelector(
//     '.settings-password',
//   ) as HTMLElement;

//   changePasswordBtn?.addEventListener('click', (e) => {
//     e.preventDefault();
//     e.stopImmediatePropagation();

//     if (
//       settingsPasswordDiv
//       && (settingsPasswordDiv.style.display === 'none'
//         || settingsPasswordDiv.style.display === '')
//     ) {
//       settingsPasswordDiv.style.display = 'flex';
//     } else if (settingsPasswordDiv) {
//       settingsPasswordDiv.style.display = 'none';
//     }
//   });
// });
