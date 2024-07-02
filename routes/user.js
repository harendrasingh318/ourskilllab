const { Router} = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

router.post('/signup', (req,res)=>{

});

router.get('/courses', (req,res)=>{

});

router.post('/course/:courseID', userMiddleware, (req,res)=>{

});

router.get('/purchasedCourses', userMiddleware, (req,res)=>{

});

module.exports= router;

