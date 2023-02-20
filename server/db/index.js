import Student from "./student";
import Campus from "./campus";
import db from "./db";

Campus.hasMany(Student);
Student.belondsTo(Campus);

module.exports = {
  db,
  Student,
  Campus,
};
