
#Todo App build up

This project is based on **create-react-app** and my interpretation of the **[Redux tutorial](http://redux.js.org/docs/basics/)**. For more on that, take a look at the excellent videos by [Dan Abramov](https://twitter.com/dan_abramov) on [Egghead.io about Redux](https://egghead.io/playlists/redux-47e2b821).

You can find the various stages of this project in this repos branches. They are named in order. If you have cloned this repo, run ```git branch -a``` to list them.

* 1-basic-nostyle
* 2-redux-devtools
* 3-added-chat (local and useless)
* 4-chat-and-socketio-with-redux < where we are now

##1 Basic Nostyle
This is the basic Todo app from the tutorials. I've made a few adjustments, most notably:
The Redux Store is setup for middleware. I consider this a requirement because at some point, the app is going to need to send and receive data and Redux store middleware is where that magic happens. Middleware basically intercepts actions before they get the the Reduceres and modify things before passing them along.
This was also a good place to add Redux Logger which outputs actions, dispatches and state so we can see how things are working from the console.

This is using the ES2017 Object Spread Operator instead of Object.assign(). Considering we have Array Spread Operators, this just makes the code more consistent in my mind. If you are compairing the Tutorial to this code, here is the difference found in ```reducers/todo.js```, keep in mind, this does exactly the same thing:

```js
// Object.assign:
return Object.assign({}, state, { completed: !state.completed });

// Object Spread Operator
return {...state, ...{ completed: !state.completed }};
``` 
Find more about this in the [Redux docs](http://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html).

Lastly, No Style is simply that I have not applied any kind of style yet. I plan to, but that is for the future.

##2 Redux Devtools
This branch adds Redux Devtools to the store. That can be found in ```/store/index.js```.  That is the beauty of the middleware and store setup, we can add something like this with little rewrite. Redux Devtools is a little redundant with the logging but better too much info than not enough when troubleshooting. 

>Note: This setup should exclude Devtools and Logger on build but I have not tested this yet.

##3 Added Chat
This branch adds the browser side of the chat app. It is not hooked up to a server yet so they only get emitted to the local browser. It works in much the same was as the Todos.


I've tried to keep this project   

##4 Chat and Socket.IO with Redux
This branch adds a simple nodejs server to be our socket.io server and redux-socket.io middleware to handle transmission.

Somebody said to me recently *"Simple does not mean easy"*, I believe it. 

If you look at ```server.js``` in the root directory you will see there is a bit more code than just staring HTTP and attaching socket.io. This is intentional, I want to make it easy to build on this if I want to add an API server, database etc.

All of the node.js dependencies are currently in Dev because at this time, there should be no call for running this node server in production and  
To make this work with our Create React App I've modified the package.json file to start this nodejs server any time we type ```npm start``` and added the ```concurrently``` module. Here is the line to start both serer.js and create-react-app from ```npm start```.
```js
"start": "concurrently --kill-others 'node_modules/.bin/nodemon server.js' 'react-scripts start'",
```
This starts server.js on port 3080 and create-react-app on 3000 so there is no port conflict.

Since serer.js is running with Nodemon, it will restart the server any time files are updated. This is not necessary from the React side but I wanted to make sure I am always working on the latest saved code. You can see a restart in the terminal logged as:
```bash
[0] Socket connected: E3VYXdT0vzqMXRjPAAAA
[0] Socket connected: -W76ML1VLC3K98GGAAAB
[0] action CHAT_INPUT Chat is so cool 1479414439180 E3VYXdT0vzqMXRjPAAAA
[0] [nodemon] restarting due to changes... # Server restarts...
[0] [nodemon] starting `node server.js`
[0] **** HTTP development http://localhost:3080 # ...and done
[0] Socket connected: HPtj-cbKwIZCae5RAAAA # Our clients reconnect automatically  
[0] Socket connected: -4Ael4Q7m-KWPkAIAAAB
``` 

The only portion of the serer that is specific to our Socekt.IO connection is outlined here. 

```js
// at the top
const io = require('socket.io');
```
Then at the bottom, after we load our ```httpServer```
This function gets the server time in milliseconds. This does not have any particular use now but I imagine in a future client it would say "received five minutes ago" type of thing. Also, could be useful to keep the chats in chronological order, if it was that important.
```js
const getTime = () => new Date().getTime();
```
Bind Socket.io to our httpServer. Whatever ports we use for the server are used by Socket.io by default so we don't need to call that out here.
```js
// socket.io
const socketio = io.listen(httpServer);
```
Now we connect to the "main" room and log it out to the console.
```js
socketio.on('connection', (socket) => {
  socket.join('main');
  console.log(`Socket connected: ${socket.id}`);
```
Here is where things start to look like Redux. We receive the action, the one we intercepted with the the redux-socket.io middleware as an action object. All of the things it contained in the browser it has here. Think about that for a minute. We could do something very similar with the Todo list or really anything. Pass an action, do something with it and then pass  back an action that will be handled client side by Redux and React.  

The CHAT_TYPE could be just one of several types we pass to this socket and we could have a switch statement, just like our browser side app that directs the actions to the proper function. I think this is very powerful,
```js
  socket.on('action', (action) => {
    if (action.type === 'CHAT_INPUT') {
      console.log('action', action.type, action.chat, action.id, socket.id, '!');
```
Since we intercepted our action, nothing has happened in the client yet. It sent something and that was about all. So here we are emitting to the whole room. Another option would be to have the client handle it's own CHAT_INPUT and then emit only to the rest of the clients. Then we could use a "resend" if for some reason it was not able to connect to the server when it as originally sent.

So we just build a new object and send it back as CHAT_OUTPUT.
```js
      socketio.in(action.room).emit('action', {
        type: 'CHAT_OUTPUT',
        chat: action.chat,
        time: getTime(),
        // user: action.user,
        id: action.id,
        room: action.room,
      });
    }
  });
});
```

Back in our Apps, the reducers listen for CHAT_OUTPUT and when it comes in, they do their thing, just as if it had originated in the browser.

