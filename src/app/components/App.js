import React, { Component } from 'react';
import AppWebSocket from './AppWebSocket';
import MessageList from './MessageList';
import Layout from './Layout';

class App extends Component {
  constructor() {
    super();
    this.socket = new AppWebSocket(this, 'ws://st-chat.shas.tel');
    this.socket.connect();

    this.state = {
      messages: [],
    };
  }

  addMessages(messages) {
    if (!messages.length) return;

    this.setState({
      messages: messages.concat(this.state.messages),
    });
  }

  render() {
    const { messages } = this.state;
    return (
      <Layout>
        <div className="chatContainer">
          <MessageList messages={messages}/>
        </div>
      </Layout>
    );
  }
}

export default App;
