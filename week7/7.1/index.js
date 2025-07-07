const express=require("express");
const jwt=require("jsonwebtoken");
const mongoose=require("mongoose");

const JWT_SECRECT="Thistopsecrect";

mongoose.connect("mongodb+srv://1ms21cy045:rbC30vIiftUnAlib@cluster0.kjkjmer.mongodb.net/todo-app-databasee")

const {UserModel,TodoModel}=require("./db")
const app=express();


app.use(express.json());

app.post("/signup",async function(req,res){
    const email=req.body.email;
    const password=req.body.password;
    const name=req.body.name;

    await UserModel.create({
        email:email,
        password:password,
        name:name   
    })

    res.json({
        msg:"Your are Loged In"
    })

})

app.post("/signin",async function(req,res){
    const email=req.body.email;
    const password=req.body.password;

    const user=await UserModel.findOne({
        email:email,
        password:password
    })

    console.log(user);
    if(user){
        const token=jwt.sign({
            id:user._id.toString()
        },JWT_SECRECT);
        res.json({
            token:token
        })
    }else{
        res.status(403).json({
            message:"Incorrect password"

        })
    }
})

function auth(req,res,next){
    const token=req.headers.token;

    const decodeuser=jwt.verify(token,JWT_SECRECT);
    console.log(decodeuser)
    if(decodeuser.id){
        req.userId=decodeuser.id;
        next();
    }else{
        res.status(403).json({
            message:"You are not logged in"
        })
    }
}

app.post("/todo",auth,async function(req,res){
    const userId=req.userId;
    const title=req.body.title;
    const done=req.body.done;

    await TodoModel.create({
        title:title,
        done:done,
        userId:userId
    });

    res.json({
        msg:"Todo created"
    })

})

app.get("/todos",auth,async function(req,res){
    const userId=req.userId;

    const todos=await TodoModel.find({
        userId
    })
    res.json({
        todos
    })
})

app.listen(3000);
