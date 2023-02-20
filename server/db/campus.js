const { Sequelize } = require("sequelize");
const db = require("./db");

const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING(150),
    allowNull: false,
  },

  imageUrl: {
    type: Sequelize.STRING(100),
    defaultValue: "http://dummyimage.com/150x150.png/cc0000/ffffff",
  },

  address: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },

  description: {
    type: Sequelize.STRING,
  },
});

module.exports = Campus;
