const sequelize = require('../config/db');
const Item = require('./item.model');

async function init() {
  await sequelize.authenticate();
  // This will create table if not exists (in dev). In production, use migrations.
  await Item.sync();
  console.log('DB connected & models synced');
}

module.exports = { sequelize, Item, init };
