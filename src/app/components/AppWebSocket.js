class AppWebSocket {
  constructor(item, url) {
    this.item = item;
    this.url = url;

    this.onOpen = this.onOpen.bind(this);
    this.onError = this.onError.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onMessage = this.onMessage.bind(this);
  }

  connect() {
    global.console.log('connect');
    this.socket = new WebSocket(this.url);

    this.socket.onopen = this.onOpen;
    this.socket.onerror = this.onError;
    this.socket.onclose = this.onClose;
    this.socket.onmessage = this.onMessage;

    global.console.log('1.5');
  }

  reconnect() {
    global.console.log('reconnect');
    this.socket.close();
    setTimeout(() => {
      this.connect();
    }, 1000);
  }

  onOpen() {
    global.console.log('onOpen');
    global.console.log('1.2');
    global.console.log(this.socket);
  }

  onError() {
    global.console.log('onError');
    this.reconnect();
  }

  onClose() {
    global.console.log('onClose');
    this.reconnect();
  }

  onMessage(event) {
    global.console.log('onMessage');
    const messages = JSON.parse(event.data).reverse();
    this.item.addMessages(messages);
  }
}

export default AppWebSocket;
