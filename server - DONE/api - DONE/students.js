const router = require("express").Router();
import { Student, Campus } from "../db";

router.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.send(students);
  } catch (err) {
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
    console.error(err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const student = await Student.create(req.body);
    res.send(student);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.put(":/studentId", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.studentId);
    res.send(await student.update(req.body));
  } catch (err) {
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
    console.error(err);
    next(err);
  }
});

module.exports = router;
