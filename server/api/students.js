const router = require("express").Router();
const { Student, Campus } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.send(students);
  } catch (err) {
    console.log("Error in students.js router.get '/'");
    console.error(err);
    next(err);
  }
});

router.get("/:studentId", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.studentId, {
      include: [Campus],
    });
    res.send(student);
  } catch (err) {
    console.log("Error in students.js router.get '/:studentId'");
    console.error(err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const student = await Student.create(req.body);
    res.send(student);
  } catch (err) {
    console.log("Error in students.js router.post");
    console.error(err);
    next(err);
  }
});

router.put("/:studentId", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.studentId);
    res.send(await student.update(req.body));
  } catch (err) {
    console.log("Error in students.js router.put");
    console.error(err);
    next(err);
  }
});

router.delete("/:studentId", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.studentId);
    student.destroy();
    res.send(student);
  } catch (err) {
    console.log("Error in students.js router.delete");
    console.error(err);
    next(err);
  }
});

module.exports = router;
