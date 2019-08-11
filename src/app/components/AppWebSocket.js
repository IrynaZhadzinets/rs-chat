class AppWebSocket {
  constructor(item, url) {
    this.item = item;
    this.url = url;

    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onMessage = this.onMessage.bind(this);
  }

  connect() {
    this.socket = new WebSocket(this.url);

    this.socket.onopen = this.onOpen;
    this.socket.onclose = this.onClose;
    this.socket.onmessage = this.onMessage;
  }

  onOpen() {
    global.console.log(this.socket);
  }

  onClose() {
    global.console.log(this.socket);
  }

  onMessage() {
    global.console.log(this.socket);
  }
}

export default AppWebSocket;
