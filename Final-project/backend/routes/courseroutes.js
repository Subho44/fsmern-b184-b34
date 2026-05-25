const express = require("express");
const jwt = require("jsonwebtoken");


const router = express.Router();

const ctrl = require("../controllers/courseController");

//auth check
const authcheck = (req,res,next) =>{
    const token = req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.json({message:"invalid token"});
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch(err){
        res.json({message:"invalid token"});
    }
}

//admincheck 

const admincheck = (req,res,next) =>{
    if(req.user.role !== "admin") {
        return res.json({
            message:"only admin can access",
        });
    }
    next();
};



// admin access
// add course

router.post("/",authcheck,admincheck, ctrl.addcourse);
// update course

router.put("/:id",authcheck,admincheck, ctrl.updatecourse);
// delete course

router.delete("/:id",authcheck,admincheck, ctrl.deletecourse);

//public

// view all course

router.get("/", ctrl.viewcourse);


// single course

router.get("/:id", ctrl.viewonecourse);



module.exports = router;