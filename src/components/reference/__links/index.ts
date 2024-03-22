import Handlebars from "handlebars";
export { default as ReferenceLinks } from "./reference__links.hbs?raw";

Handlebars.registerHelper("pages", () => {
  return [
    { page: "login" },
    { page: "register" },
    { page: "chat" },
    { page: "404" },
    { page: "500" },
    { page: "profile" },
  ];
});
