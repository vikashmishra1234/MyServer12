
 





const express = require("express");
const User = require('../model/user');

const Route = express.Router();

Route.post('/savedata',async(req,res)=>{
    const { name, phone,message } = req.body;
    if (!name || !phone|| !message) {
        return res.status(422).json({ error: "Please add all the fields" })
    }


    try {
        const userData = await User.findOne({phone:req.body.phone});
        if(userData){
            return res.json({error:"mobile number already exist"})
        }
        const newUser = new User(req.body);
      await newUser.save();
        console.log("save succesfully");
        return res.json({success:true,message:"Thanks your response has been recorded"})
        
    } catch (error) {
        console.log("data not saved")
        return res.json({success:false ,error:"something went wrong"})
        
    }

})

module.exports = Route;