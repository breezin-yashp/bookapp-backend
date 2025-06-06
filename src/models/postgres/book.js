const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db');

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  published_date: {
    type: DataTypes.DATE
  },
  author_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Book; 