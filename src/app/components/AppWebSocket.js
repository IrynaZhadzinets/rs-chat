class AppWebSocket {
  constructor(item, url) {
    this.item = item;
    this.url = url;
    this.unsentMessages = [];

    this.onOpen = this.onOpen.bind(this);
    this.onError = this.onError.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onMessage = this.onMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  connect() {
    this.socket = new WebSocket(this.url);

    this.socket.onopen = this.onOpen;
    this.socket.onerror = this.onError;
    this.socket.onclose = this.onClose;
    this.socket.onmessage = this.onMessage;
  }

  reconnect() {
    this.socket.close();
    setTimeout(() => {
      this.connect();
    }, 1000);
  }

  onOpen() {
    this.unsentMessages.forEach(message => this.socket.send(message));
    this.unsentMessages = [];
  }

  onError() {
    this.reconnect();
  }

  onClose() {
    this.reconnect();
  }

  onMessage(event) {
    const messages = JSON.parse(event.data).reverse();
    this.item.addMessages(messages);
  }

  sendMessage(obj) {
    const message = JSON.stringify(obj);

    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
    } else {
      this.unsentMessages.push(message);
    }
  }
}

export default AppWebSocket;
