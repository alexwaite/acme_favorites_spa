const express = require('express');
const app = express();
const volleyball = require('volleyball');
const path = require('path');
const db = require('./db');
const { User, Thing, Favorite } = db.models;

const port = process.env.PORT || 3000;

app.use(volleyball);

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

db.syncAndSeed().then(() => {
  app.listen(port, () => console.log(`listening on port ${port}`));
});

app.get('/app.js', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'dist', 'main.js'))
);

app.get('/', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'index.html'))
);

app.get('/users', (req, res, next) => {
  User.findAll({
    include: [
      {
        model: Favorite,
      },
    ],
  })
    .then(users => {
      res.json(users);
    })
    .catch(error => console.error(error));
  // .next();
});

module.exports = app;
