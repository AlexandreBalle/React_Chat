import PropTypes from'prop-types';
import React from 'react';
import Emoji from "react-emoji-render";

const MessageItem = ({ username, message }) => {
  return (
    <div className="MessageItem left">
      {username}
      <div className="msg_cotainer_send sender">
        <Emoji text={message}/>
      </div>
    </div>
  );
}

MessageItem.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default MessageItem;
