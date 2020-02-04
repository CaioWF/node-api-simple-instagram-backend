const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/semanaOmnistackInstagram', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(routes);

app.listen(3333);
