import PropTypes from'prop-types';
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import MessageItem from './MessageItem';

const MessageList = ({ messages, loading, error }) => {
  return (
    <div className="MessageList">
      <ListGroup>
      {
        !loading && messages && messages.length > 0 && messages.map(({user, message, sentAt}, i) =>
          <ListGroup.Item key={i}>
            <MessageItem username={user} message={message} sentAt={sentAt ? sentAt : ""}/>
          </ListGroup.Item>
        )
      }
      {
        !loading && !messages && messages.length === 0 &&
        <ListGroup.Item>
          <div className="msg_cotainer_send receiver">
            No messages !
          </div>
        </ListGroup.Item>
      }
      {
        loading &&
        <ListGroup.Item>
          <div className="msg_cotainer_send receiver">
            <i className="fa fa-spinner fa-spin" style={{ marginRight: "10px" }}></i>
            Waiting for messages ...
          </div>
        </ListGroup.Item>
      }
      {
        error &&
        <ListGroup.Item>
          <div className="msg_cotainer_send" style={{ background: "#DC5050" }}>
            {error}
          </div>
        </ListGroup.Item>
      }
      </ListGroup>
    </div>
  );
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};

export default MessageList;
