import AppWebSocket from './AppWebSocket';

class App {
  constructor() {
    this.socket = new AppWebSocket(this, 'ws://st-chat.shas.tel');
    this.socket.connect();
  }
}

export default App;
