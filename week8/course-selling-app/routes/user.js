const {z, email}=require("zod");
const bcrypt=require("bcrypt");
const {Router}=require("express");
const {UserModel}=require("../db");
const jwt=require("jsonwebtoken");
require("dotenv").config();


const jwtuser=process.env.JWT_USER_SECRECT;
// console.log(jwtuser);
const UserRouter=Router();

const UserScehma=z.object({
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
console.log("server reached here")
UserRouter.post("/signup", async function (req, res) {
try{
    const parseResult=UserScehma.safeParse(req.body);

    if(!parseResult.success){
       const errors=parseResult.error.format();

       return res.status(400).json({
        message:"Validation failed",
        errors
       })
    }
    const {email,password,firstName,lastName}=req.body;

    const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
           return res.status(409).json({ message: "Email already registered" });
        }

    const hashedpassword=await bcrypt.hash(password,5);
    // console.log(hashedpassword);

    await UserModel.create({
        email,
        password:hashedpassword,
        firstName,
        lastName
    })
    return res.status(201).json({
            message: "User registered successfully",
            // userId: user._id
        });
}catch(err){
     console.error("Signup error:", err);
    return res.status(500).json({
            message: "Internal server error"
    });
}
});

UserRouter.post("/signin", async function (req, res) {
    const {email,password}=req.body;

    const response=await UserModel.findOne({
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
        },jwtuser)
        res.json({
            token:token,
        })
    }else{
        res.status(403).json({
            message:"The password is incorrect"
        })
    }
});
UserRouter.get("/userpurchases", function (req, res) {
    res.json({
    msg: "Your are signed Up"
    })
})

module.exports=({
    UserRouter:UserRouter
})