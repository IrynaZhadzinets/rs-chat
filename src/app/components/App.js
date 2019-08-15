import React, { Component } from 'react';
import MessageNotification from './MessageNotification';
import MessageForm from './MessageForm';
import AppWebSocket from './AppWebSocket';
import MessageList from './MessageList';
import Layout from './Layout';

class App extends Component {
  constructor() {
    super();
    this.socket = new AppWebSocket(this, 'wss://wssproxy.herokuapp.com/');
    this.socket.connect();

    this.state = {
      messages: [],
    };

    this.notification = new MessageNotification();
  }

  static scrollList() {
    const container = document.querySelector('.chatContainer');
    container.scrollTop = container.scrollHeight;
  }

  addMessages(messages) {
    if (!messages.length) return;
    if (messages.length < 10 && document.hidden) {
      messages.forEach(message => this.notification.demonstration(message));
    }

    this.setState({
      messages: this.state.messages.concat(messages),
    });
    App.scrollList();
  }

  render() {
    const { messages } = this.state;
    return (
      <Layout>
        <div className="chatContainer">
          <MessageList messages={messages}/>
        </div>
        <MessageForm socket={this.socket}/>
      </Layout>
    );
  }
}

export default App;
