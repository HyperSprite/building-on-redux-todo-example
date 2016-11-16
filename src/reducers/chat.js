// @flow

import { TYPES } from '../actions';

const chatitem = (state = {}, action) => {
  switch (action.type) {

    case TYPES.CHAT_INPUT:
      return {
        id: action.id,
        chat: action.chat,
      };

    default:
      return state;
  }
};

const chatitems = (state = [], action) => {
  switch (action.type) {

    case TYPES.CHAT_INPUT:
      return [
        ...state,
        chatitem(undefined, action),
      ];

    default:
      return state;
  }
};

export default chatitems;
