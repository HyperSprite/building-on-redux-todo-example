import React, { PropTypes } from 'react';

const propTypes = {
  chat: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  room: PropTypes.string.isRequired,
};

const ChatItem = ({ chat, time, user, room }: ChatInputIF) => (
  <div>
    <small>In {room} at {time} - {user} said: </small><br />
    <strong> { chat } </strong>
  </div>
);

ChatItem.propTypes = propTypes;

export default ChatItem;
