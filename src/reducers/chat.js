// @flow

import { TYPES } from '../actions';

const chatitem = (state: ReducerChatInputIF = {}, action: ChatOutputIF) => {
  switch (action.type) {

    case TYPES.CHAT_OUTPUT:
      return {
        id: action.payload.id,
        chat: action.payload.chat,
        time: action.payload.time,
        user: action.payload.user,
        room: action.payload.room,
      };

    default:
      return state;
  }
};

const chatitems = (state: ReducerChatItemsStateIF = [], action: ChatOutputIF) => {
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
