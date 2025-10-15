const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Item = sequelize.define('items', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(255), allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  supplier: { type: DataTypes.STRING(255), allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true }
}, {
  tableName: 'items'
});

module.exports = Item;
