const {Router}=require("express");
require("dotenv").config();
const CourseRouter=Router();
const {userMiddleware}=require("../middelware/user");
const { PurchaseModel,CourseModel } = require("../db");


CourseRouter.post("/purchase",userMiddleware,async function(req,res){
   const userId=req.userId;
   const courseId=req.body.courseId;

   const purchase=await PurchaseModel.create({
    userId,
    courseId
   })
   
    res.json({
        msg:"You have Successfully bought the course"
    })
});

CourseRouter.get("/preveiw",async function(req,res){

    const courses=await CourseModel.find({});
    res.json({
        courses
    })
})

module.exports=({
    CourseRouter:CourseRouter
})