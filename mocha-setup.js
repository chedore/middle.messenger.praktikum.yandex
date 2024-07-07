import { JSDOM } from "jsdom";

const { window } = new JSDOM('<div id="app"></div>', {
  url: "http://localhost:5175",
});

global.FormData = window.FormData;
global.DocumentFragment = window.DocumentFragment;
global.window = window;
global.document = window.document;
global.Node = window.Node;
