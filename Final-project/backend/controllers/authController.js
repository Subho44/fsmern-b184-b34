const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register
exports.register = async (req,res)=> {
    try {
        const {name,email,password,role} = req.body;
        const olduser = await User.findOne({email});
        const hashedpswd = await bcrypt.hash(password);

        const user = await User.create({
            name,
            email,
            password:hashedpswd,
            role: role ||"user",
        });
        res.json({message:"register successfully",user});
    } catch(err) {
        console.error(err);
    }
}

//login
exports.login = async (req,res)=> {
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        const checkpassword = await bcrypt.compare(password,user.password);

       const token = jwt.sign({
        id:user._id,
        role:user.role,
       },
       process.env.JWT_SECRET
    
    );

       
        res.json({message:"LOGIN successfully",token,user});
    } catch(err) {
        console.error(err);
    }
}