// This is a minima express server for socket.io or API build up.
// All Node dependencies are listed as dev in package.json
// Install them as "--save-dev"

// To start this use npm run dev, both
// server.js and react-create-app will start

const http = require('http');
const express = require('express');
const io = require('socket.io');

const app = express();
const port = process.env.PORT || 3080;

// 404 catch-all handler (middleware)
app.use(
  (req, res) => {
    console.log(`>>>> 404 URL : ${req.url}`);
    console.log(`>>>> 404 IP  : ${req.ip}`);
    res.redirect('/');
  }
);

// 500 error handler (middleware)
app.use(
  (err, req, res) => {
    console.log('!!!! 500 ', err.stack);
    res.status(500)
       .render('500');
  }
);

const httpServer = http.createServer(app).listen(port, () => {
  console.log(`**** HTTP ${app.get('env')} http://localhost:${port}`);
});

const getTime = () => new Date().getTime();

// socket.io
const socketio = io.listen(httpServer);

socketio.on('connection', (socket) => {
  socket.join('main');
  console.log(`Socket connected: ${socket.id}`);
  socket.on('action', (action) => {
    if (action.type === 'CHAT_INPUT') {
      console.log('action', action.type, action.payload.chat, action.payload.id, socket.id, '!');
      socketio.in(action.payload.room).emit('action', {
        type: 'CHAT_OUTPUT',
        payload: {
          chat: action.payload.chat,
          time: getTime(),
          user: action.payload.user,
          id: action.payload.id,
          room: action.payload.room,
        },
      });
    }
  });
});
