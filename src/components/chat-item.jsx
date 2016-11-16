import React, { PropTypes } from 'react';

const propTypes = {
  chat: PropTypes.string.isRequired,
};

const ChatItem = ({ chat }) => (
  <div>
    {chat}
  </div>
);

ChatItem.propTypes = propTypes;

export default ChatItem;
