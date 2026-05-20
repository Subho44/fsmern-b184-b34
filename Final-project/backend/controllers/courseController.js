const Course = require("../models/Course");


// ================= ADD COURSE =================

exports.addcourse = async (req, res) => {

  try {

    const { title, price } = req.body;

    // validation

    if (!title || !price) {
      return res.status(400).json({
        message: "Title and Price required",
      });
    }

    const newcourse = new Course({
      title,
      price,
    });

    // save database

    await newcourse.save();

    res.status(201).json({
      success: true,
      message: "Course Added Successfully",
      data: newcourse,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


// ================= VIEW ALL COURSE =================

exports.viewcourse = async (req, res) => {

  try {

    const courses = await Course.find();

    res.status(200).json({
      success: true,
      total: courses.length,
      data: courses,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


// ================= SINGLE VIEW =================

exports.viewonecourse = async (req, res) => {

  try {

    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        message: "Course Not Found",
      });
    }

    res.status(200).json({
      success: true,
      data: course,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


// ================= UPDATE COURSE =================

exports.updatecourse = async (req, res) => {

  try {

    const { title, price } = req.body;

    const updatedcourse = await Course.findByIdAndUpdate(
      req.params.id,
      {
        title,
        price,
      },
      {
        new: true,
      }
    );

    if (!updatedcourse) {
      return res.status(404).json({
        message: "Course Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course Updated Successfully",
      data: updatedcourse,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


// ================= DELETE COURSE =================

exports.deletecourse = async (req, res) => {

  try {

    const deletedcourse = await Course.findByIdAndDelete(req.params.id);

    if (!deletedcourse) {
      return res.status(404).json({
        message: "Course Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course Deleted Successfully",
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};