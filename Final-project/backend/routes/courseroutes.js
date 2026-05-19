const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/courseController")

router.post("/",ctrl.addcourse);
router.get("/",ctrl.viewcourse);
router.get("/:id",ctrl.viewonecourse);
router.put("/:id",ctrl.updatecourse);
router.delete("/:id",ctrl.deletecourse);

module.exports =router;