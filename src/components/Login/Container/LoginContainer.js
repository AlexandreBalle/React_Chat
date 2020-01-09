import PropTypes from'prop-types';
import React, { useState } from 'react';
import { connect } from "react-redux";

import Login from '../Login';
import { addNewUsername } from '../../../redux/actions/messages';

const mapDispatchToProps = (dispatch) => {
  return {
    addUsername: (username) => {
      dispatch(addNewUsername(username))
    }
  }
}

const LoginContainer = ({ addUsername }) => {
  const [username, setUsername]       = useState('');
  const [redirection, setRedirection] = useState(false);

  const handleSubmit = (event) => {
    setRedirection(true);
    addUsername(username);
    event.preventDefault();
  }

  const handleChange = (usernameChange) => {
    setUsername(usernameChange);
  }

  return <Login username={username} redirection={redirection} handleSubmit={handleSubmit} handleChange={handleChange}/>;
}

LoginContainer.propTypes = {
  addUsername: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(LoginContainer)
