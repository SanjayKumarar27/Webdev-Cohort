const {Router}=require("express");
require("dotenv").config();
const CourseRouter=Router();

CourseRouter.post("/purchase",function(req,res){
    res.json({
        msg:"Your are signed Up"
    })
});

CourseRouter.get("/preveiw",function(req,res){
    res.json({
        msg:"Your are signed Up"
    })
})

module.exports=({
    CourseRouter:CourseRouter
})