const router = require("express").Router();
import { Student, Campus } from "../db";

router.get("/", async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.send(campuses);
  } catch (err) {
    console.log("Error in campuses.js router.get '/'");
    console.error(err);
    next(err);
  }
});

router.get("/:campusId", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.campusId, {
      include: [Student],
    });
    res.send(campus);
  } catch (err) {
    console.log("Error in campuses.js router.get '/:campusId'");
    console.error(err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const campus = await Campus.create(req.body);
    res.send(campus);
  } catch (err) {
    console.log("Error in campuses.js router.post");
    console.error(err);
    next(err);
  }
});

router.put("/:campusId", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.campusId);
    res.send(await campus.update(req.body));
  } catch (err) {
    console.log("Error in campuses.js router.put");
    console.error(err);
    next(err);
  }
});

router.delete("/:campusId", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.campusId);
    campus.destroy();
    res.send(campus);
  } catch (err) {
    console.log("Error in campuses.js router.delete");
    console.error(err);
    next(err);
  }
});

module.exports = router;
