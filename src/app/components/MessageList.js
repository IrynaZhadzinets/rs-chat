import React, { Component } from 'react';
import nextId from 'react-id-generator';
import PropTypes from 'prop-types';

class MessageList extends Component {
  render() {
    const { messages } = this.props;
    const messageItem = messages.map(message => (
      <li key={ nextId() } className="messageItem">
        <div className="messageNickname">{message.from}</div>
        <div className="messageText">{message.message}</div>
        <div className="messageDatetime">{(new Date(message.time)).toLocaleString()}</div>
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
