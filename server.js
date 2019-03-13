const express = require('express');
const app = express();
const volleyball = require('volleyball');
const db = require('./db');

const port = process.env.PORT || 3000;

app.use(volleyball);

db.syncAndSeed().then(() => {
  app.listen(port, () => console.log(`listening on port ${port}`));
});

module.exports = app;
