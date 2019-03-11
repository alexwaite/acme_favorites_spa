const conn = require('./conn');

module.exports = conn.define('favorite', {
  rank: conn.Sequelize.INTEGER,
});
