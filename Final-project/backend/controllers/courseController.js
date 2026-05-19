const Course = require("../models/Course");

//add course
exports.addcourse =async(req,res)=>{
    try {
        const {title,price} = req.body;
        const newcourse = new Course({title,price});
        await newcourse;
        res.json(newcourse);
    } catch(err){
        console.error(err);
    }

}
//view course
exports.viewcourse =async(req,res)=>{
    try {
        
        const courses = await Course.find();
        res.json(courses);
    } catch(err){
        console.error(err);
    }

}
//singelview
exports.viewonecourse =async(req,res)=>{
    try {
        const newcourse = await Course.findById(req.params.id);
        res.json(newcourse);
    } catch(err){
        console.error(err);
    }

}
//update
exports.updatecourse =async(req,res)=>{
    try {
        const {title,price} = req.body;
        const newcourse = await Course.findByIdAndUpdate(req.params.id,{title,price},{new:true});
        res.json(newcourse);
    } catch(err){
        console.error(err);
    }

}
//delete
exports.deletecourse =async(req,res)=>{
    try {
        await Course.findByIdAndDelete(req.params.id);
        res.json({message:"course deleted successfully"});
    } catch(err){
        console.error(err);
    }

}
