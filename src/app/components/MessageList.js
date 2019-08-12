import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageList extends Component {
  render() {
    const { messages } = this.props;
    const messageItem = messages.map(message => (
      <li key={message.id} className="messageItem">
        <div>{message.from}</div>
        <div>{message.time}</div>
        <div>{message.message}</div>
      </li>
    ));

    return (
      <ul className="messageList">
        {messageItem}
      </ul>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.array,
};

MessageList.defaultProps = {
  messages: [],
};

export default MessageList;
