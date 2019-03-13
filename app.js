const app = require('./server');
const path = require('path');
const db = require('./db');
const { User, Thing, Favorite } = db.models;

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
        include: [{ model: Thing }],
      },
    ],
  })
    .then(users => {
      res.json(users);
    })
    .catch(error => console.error(error));
});

app.get('/things', (req, res, next) => {
  Thing.findAll({
    include: [
      {
        model: Favorite,
        include: [{ model: User }],
      },
    ],
  })
    .then(things => {
      res.json(things);
    })
    .catch(error => console.error(error));
});
