const { Sequelize } = require("sequelize");
const db = require("./db");

const Student = db.define("student", {
  firstName: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },

  lastName: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },

  email: {
    type: Sequelize.STRING(100),
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "http://dummyimage.com/150x150.png/cc0000/ffffff",
  },

  gpa: {
    type: Sequelize.STRING(5),
    validate: {
      min: 0.1,
      max: 4.0,
    },
  },
});

module.exports = Student;
