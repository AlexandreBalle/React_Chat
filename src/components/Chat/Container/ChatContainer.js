import PropTypes from'prop-types';
import React, { useState } from 'react';
import { connect } from "react-redux";

import Chat from '../Chat';

const mapStateToProps = (state) => {
  return {
    username: state.messages.username
  }
}

const ChatContainer = ({ username }) => {
  const [messages, setMessages] = useState([]);

  const updateMessages = (message) => {
    setMessages([...messages, message]);
  }

  return <Chat username={username} messages={messages} updateMessages={updateMessages}/>;
}

ChatContainer.propTypes = {
  username: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  null
)(ChatContainer)
