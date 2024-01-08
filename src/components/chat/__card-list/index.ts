import Handlebars from "handlebars";
export { default as ListChatCards } from "./chat__card-list.hbs?raw";

Handlebars.registerHelper("chats", () => {
  return [
    { name: "Андрей", message: "Изображение", time: "10:49", count: "2" },
    { name: "Киноклуб", message: "стикер", owner: true, time: "12:00" },
    {
      name: "Илья",
      message: "Друзья, у меня для вас особенный выпуск новостей!...",
      time: "15:12",
      count: "4",
    },
    { name: "Вадим", message: "Круто!", owner: true, time: "Пт" },
  ];
});
