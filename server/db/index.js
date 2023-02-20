const Student = require("./student");
const Campus = require("./campus");
const db = require("./db");

Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {
  db,
  Student,
  Campus,
};
