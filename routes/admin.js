const express = require("express");
const router = express.Router();
const adminMiddleware = require("../middleware/admin");
const {Admin} = require("../db");

router.post('/signup' , async (req,res)=>{

    const username = req.headars.username;
    const password = req.headers.password;

    await Admin.create({
        username:username,
        password:password

    })

    res.json({
        msg: "Admin has been created"
    })


})

router.post('/course' ,(req,res)=>{


})

router.get('/courses' , (req,res)=>{

    res.json({
        
    msg:"I am the courses endpoint for admin"
    })

})

module.exports = router;