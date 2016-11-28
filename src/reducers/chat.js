// @flow

import { TYPES } from '../actions';

const chatitem = (state: ReducerChatInputIF = {}, action: ChatInputIF) => {
  switch (action.type) {

    case TYPES.CHAT_OUTPUT:
      return {
        id: action.id,
        chat: action.chat,
        time: action.time,
        // user: action.user,
        room: action.room,
      };

    default:
      return state;
  }
};

const chatitems = (state: ReducerChatItemsStateIF = [], action: ChatInputIF) => {
  switch (action.type) {

    case TYPES.CHAT_OUTPUT:
      return [
        ...state,
        chatitem(undefined, action),
      ];

    default:
      return state;
  }
};

export default chatitems;
