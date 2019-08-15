import React, { Component } from 'react';

class Nickname extends Component {
  constructor() {
    super();

    this.state = {
      nickname: localStorage.getItem('nickname') ? localStorage.getItem('nickname') : 'Noname',
      currentNickname: localStorage.getItem('nickname') ? localStorage.getItem('nickname') : 'Noname',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  saveSettings() {
    const text = this.state.nickname.trim();
    if (!text.length || text.length > 30) {
      localStorage.setItem('nickname', 'Noname');
    } else {
      localStorage.setItem('nickname', text);
    }
    this.setState({
      currentNickname: localStorage.getItem('nickname'),
    });
  }

  handleSubmit(event) {
    this.saveSettings();
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      nickname: event.target.value,
    });
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='nicknameForm'
      >
        <div className='currentNickname'>
          <img className="avatarLogo" src="./src/images/avatar.png"></img>
          <h5>{this.state.currentNickname}</h5>
        </div>
        <div className="chooseNickname">
          <input
            className='nicknameField'
            onChange={this.handleChange}
            value={this.state.nickname}
            type='text' />
        </div>
      </form>
    );
  }
}

export default Nickname;
