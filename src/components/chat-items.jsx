import React, { PropTypes } from 'react';
import ChatItem from './chat-item';

const propTypes = {
  chatitems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    chat: PropTypes.string,
  })),
};

const ChatItems = ({ chatitems }) => (
  <div>
    {chatitems.map(chatitem =>
      <ChatItem
        key={chatitem.id}
        {...chatitem}
      />
    )}
  </div>
);

ChatItems.propTypes = propTypes;

export default ChatItems;
