import studentData from "./server/mocks/students.json";
import campusData from "./server/mocks/campuses.json";

const { db } = require("./server/db");

const { Student, Campus } = require("./server/db");

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      studentData.map((student) => {
        return Student.create(student);
      })
    );

    await Promise.all(
      campusData.map((campus) => {
        return Campus.create(campus);
      })
    );

    db.close();
  } catch (err) {
    console.error("An error has occured in the seeding process");
    console.error(err);
    db.close();
  }
};

seed();
