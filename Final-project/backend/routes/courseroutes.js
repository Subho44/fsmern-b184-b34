const express = require("express");

const router = express.Router();

const ctrl = require("../controllers/courseController");


// add course

router.post("/", ctrl.addcourse);


// view all course

router.get("/", ctrl.viewcourse);


// single course

router.get("/:id", ctrl.viewonecourse);


// update course

router.put("/:id", ctrl.updatecourse);


// delete course

router.delete("/:id", ctrl.deletecourse);


module.exports = router;