import EventBus from '../core/EventBus';

export default class MyWebSocket extends EventBus {
  socket;

  constructor(url: string) {
    super();
    this.socket = new WebSocket(url);
    this.socket.addEventListener('open', () => {
      console.log('Соединение установлено');
    });

    this.socket.addEventListener('close', event => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения');
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    this.socket.addEventListener('error', event => {
      console.log('Ошибка', event);
    });
  }

  recieveMessages() {
    this.socket.addEventListener('message', event => {
      console.log('Получены данные', event.data);
      try {
        const data = JSON.parse(event.data);
        this.emit('messages', data);
      } catch (error) {
        alert(`Ошибка запроса: ${error}`);
      }
    });
  }

  public sendMessage(message: string) {
    this.socket.send(
      JSON.stringify({
        content: message,
        type: 'message',
      })
    );
  }

  getOldMessages() {
    this.socket.send(
      JSON.stringify({
        content: '0',
        type: 'get old',
      })
    );
  }
}
