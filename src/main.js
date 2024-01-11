import Handlebars from "handlebars";
import * as Components from "./components";
import * as Pages from "./pages";

import { profile_props, login_props, cards_props } from "./const.ts";

const pages = {
  list: [Pages.ListPage],
  login: [Pages.LoginPage, { loginValue: login_props }],
  register: [
    Pages.RegisterPage,
    { profileValues: profile_props, password: "11111" },
  ],
  chat: [Pages.ChatPage, { login: "ivanivanov", cardsValues: cards_props }],
  404: [Pages.Page404],
  500: [Pages.Page500],
  profile: [Pages.ProfilePage, { profileValues: profile_props }],
};

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page) {
  const [source, context] = pages[page];
  const container = document.getElementById("app");
  container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener("DOMContentLoaded", () => navigate("list"));

document.addEventListener("click", (e) => {
  const page = e.target.getAttribute("page");
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
