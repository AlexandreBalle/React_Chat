import PropTypes from'prop-types';
import React from 'react';

import MessageListContainer from './Container/MessageListContainer';
import MessageBarContainer from './Container/MessageBarContainer';

const Chat = ({ username, messages, updateMessages }) => {
  return (
    <div className="Chat">
      <MessageListContainer messages={messages}/>
      {username && <MessageBarContainer username={username} addMessage={updateMessages}/>}
    </div>
  );
}

Chat.propTypes = {
  username: PropTypes.string.isRequired,
  updateMessages: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
};

export default Chat;
