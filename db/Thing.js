const conn = require('./conn');

module.exports = conn.define('thing', {
  name: conn.Sequelize.STRING,
});
