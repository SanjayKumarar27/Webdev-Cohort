const {Router}=require("express");
const {AdminModel,CourseModel}=require("../db")
const jwt=require("jsonwebtoken");
const {z}=require("zod");
const bcrypt= require("bcrypt");
require('dotenv').config();
const {adminMiddelware}=require("../middelware/admin");
const admin = require("../middelware/admin");

const jwtadmin=process.env.JWT_ADMIN_SCERECT;
//  
console.log(jwtadmin)
const AdminRouter=Router();

const AdminScehma=z.object({
    email:z.string()
    .min(5,"The email should be of leangth minimum 5")
    .max(50,"The email should be of leangth maximun 50").email("Invalid email format"),

    password:z.string()
            .min(8,"The password should be of leangth minimum 8 charactors")
            .max(40,"The password should be of leangth maximum 40 charactors")
            .refine((val)=> /[A-Z]/.test(val),{
                message:"The password Must have one upper chase letter"
            })
            .refine((val)=> /[a-z]/.test(val),{
                message:"The password must have one lower case letter",
            })
            .refine((val)=> /[0-9]/.test(val),{
                message:"The password must have one number",
            })
            .refine((val)=> /[^A-Za-z0-9]/.test(val),{
                message:"The password must have on special character",
            }),
    
    firstName:z.string().min(5).max(30),
    lastName:z.string().min(5).max(40)
        
});

AdminRouter.post("/signup",async function(req,res){
try{
    const parseResult=AdminScehma.safeParse(req.body);

    if(!parseResult.success){
       const errors=parseResult.error.format();

       return res.status(400).json({
        message:"Validation failed",
        errors
       })
    }
    const {email,password,firstName,lastName}=req.body;

    const existingUser = await AdminModel.findOne({ email });
        if (existingUser) {
           return res.status(409).json({ message: "Email already registered" });
        }

    const hashedpassword=await bcrypt.hash(password,5);
    // console.log(hashedpassword);

    const admin=await AdminModel.create({
        email,
        password:hashedpassword,
        firstName,
        lastName
    })
    return res.status(201).json({
            message: "User registered successfully",
            AdminId: admin._id
        });
}catch(err){
     console.error("Signup error:", err);
    return res.status(500).json({
            message: "Internal server error"
    });
}
})

AdminRouter.post("/signin",async function(req,res){
  const {email,password}=req.body;

    const response=await AdminModel.findOne({
        email
    });
    if(!response){
        res.json({
            message:"Email does not exist",
    })
    }
    const passwordMatch=await bcrypt.compare(password,response.password);

    if(passwordMatch){
        const token = jwt.sign({
            id:response._id.toString(),
        },jwtadmin)
        res.json({
            token:token,
        })
    }else{
        res.status(403).json({
            message:"The password is incorrect"
        })
    }
})

AdminRouter.post("/course",adminMiddelware,async function(req,res){
    const adminId=req.adminId;

    const {title,description,price,imageUrl,createrId}=req.body
    const course=await CourseModel.create({
        title,
        description,
        price,
        imageUrl,
        createrId:adminId
    })
    res.json({
        message:"Course Added",
        courseId:course._id
    })
})

AdminRouter.put("/course",adminMiddelware,async function(req,res){
    const adminId=req.adminId;

    const {title,description,price,imageUrl,courseId}=req.body;
    const course=await CourseModel.updateOne({
        _id:courseId,
        createrId:adminId
    },{
        title,
        description,
        price,
        imageUrl
    })

    res.json({
        message:"Course Updated",
        courseId:course._id
    })

})

AdminRouter.get("/course/bluk",adminMiddelware,async function(req,res){
    const adminId=req.adminId;

    const courses=await CourseModel.find({
        createrId:adminId
    })

    res.json({
        message:"The list of are",
        courses
    })

})

module.exports=({
    AdminRouter:AdminRouter
})