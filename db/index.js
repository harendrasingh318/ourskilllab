const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://harendrasingh167:Chaudhary%40123@haendra.3skylxk.mongodb.net/ourskilllab");

const AdminSchema = new mongoose.Schema({
username: String,
password: String

});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    PurchasedCourses :[{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    imagelink:String,
    price:Number

});

const Admin = mongoose.model('admin', AdminSchema);
const User = mongoose.model('User',UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports ={
    Admin,
    User,
    Course
}