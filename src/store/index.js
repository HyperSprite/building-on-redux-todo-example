import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

import reducers from '../reducers';

const socket = io('http://localhost:3080');
const socketIoMiddleware = createSocketIoMiddleware(socket, 'CHAT_INPUT');

const prodMiddleware = [
  promise(),
  thunk,
  socketIoMiddleware,
];

const devMiddleware = [
  promise(),
  thunk,
  logger(),
  socketIoMiddleware,
];

let middlewareOptions;

if (process.env.NODE_ENV === 'production') {
  middlewareOptions = applyMiddleware(...prodMiddleware);
} else {
  middlewareOptions = composeWithDevTools(
    applyMiddleware(...devMiddleware),
    // other store enhancers if any
  );
}

const store = createStore(reducers, middlewareOptions);

export default store;
