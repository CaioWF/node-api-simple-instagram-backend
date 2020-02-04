const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://localhost:27017/semanaOmnistackInstagram', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use((request, response, next) => {
  request.io = io;
  next();
});

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

const routes = require('./routes');

app.use(routes);

server.listen(3333);
