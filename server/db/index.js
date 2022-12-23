import Student from "./Student";
import Campus from "./Campus";
import db from "./db";

Campus.hasMany(Student);
Student.belondsTo(Campus);

module.exports = {
  db,
  Student,
  Campus,
};
