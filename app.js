const db = require('./db');
const { User, Thing, Favorite } = db.models;
const { app } = require('./server');

app.get('/users/', async (req, res, next) => {
  try {
    const users = await User
      .findAll
      // include: [Thing, { model: Favorite, include: Thing }],
      ();
    res.json(users.data);
  } catch (error) {
    next(error);
  }
});
