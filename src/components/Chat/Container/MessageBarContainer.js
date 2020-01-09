import React, { useState } from 'react';
import PropTypes from'prop-types';
import { connect } from "react-redux";

import MessageBar from '../MessageBar';
import { addNewMessage } from '../../../redux/actions/messages';

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => {
      dispatch(addNewMessage(message))
    }
  }
}

const MessageBarContainer = ({ username, addMessage }) => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = (event) => {
    addMessage({username: username, message: message, sentAt: new Date().toLocaleString()});
    setMessage("");
    event.preventDefault();
  }

  return (
    <MessageBar message={message} handleChange={handleChange} handleSubmit={handleSubmit} />
  );
}

MessageBarContainer.propTypes = {
  addMessage: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps
)(MessageBarContainer)
