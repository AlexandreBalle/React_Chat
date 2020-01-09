import PropTypes from'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import MessageList from '../MessageList';
import { getMessages } from '../../../redux/actions/messages';

const mapStateToProps = (state) => {
  return {
    loading: state.messages.loading,
    messages: state.messages.messages,
    error: state.messages.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllMessages: () => {
      dispatch(getMessages())
    }
  }
}

const MessageListContainer = ({ messages, loading, error, getAllMessages }) => {
  useEffect(() => {
    getAllMessages();
  // eslint-disable-next-line
  }, []);

  return <MessageList messages={messages} loading={loading} error={error}/>;
}

MessageListContainer.propTypes = {
  messages: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  getAllMessages: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageListContainer)
