import React, { Component } from 'react';

class MessageForm extends Component {
  constructor(socket) {
    super();

    this.state = {
      message: '',
    };

    this.socket = socket;

    this.sendMessage = this.sendMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  sendMessage() {
    const text = this.state.message.trim();
    if (!text.length) return;

    this.socket.socket.sendMessage({
      from: localStorage.getItem('nickname'),
      message: text,
    });
  }

  handleChange(event) {
    this.setState({
      message: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.sendMessage();
    this.setState({
      message: '',
    });
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='sendMessageForm'
      >
        <input
          className='sendMessageField'
          onChange={this.handleChange}
          value={this.state.message}
          placeholder='Enter your message'
          type='text' />
      </form>
    );
  }
}

export default MessageForm;
