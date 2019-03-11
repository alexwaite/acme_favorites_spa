const conn = require('./conn');

module.exports = conn.define('user', {
  name: conn.Sequelize.STRING,
});
