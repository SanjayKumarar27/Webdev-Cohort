const express=require("express");
const jwt=require("jsonwebtoken");
// const { use } = require("react");

const app=express();
     
app.use(express.json());
const JWT_SECRECT="Sanjaykumarar";
const users=[];


app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/index.html");
})
app.post("/signup",function(req,res){

    const username=req.body.username;
    const password=req.body.password;

    users.push({
        username:username,
        password:password
    })

    res.send({
        msg:"Your signed up"
    })
    
})

app.post("/signin",function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    let foundUser=null;
    for(let i=0;i<users.length;i++){
        if(users[i].username===username&& users[i].password==password){
            foundUser=users[i];
        }
    }
    if(!foundUser){
        res.json({
            message:"Credentials Incoorect"
        })
        return;
    }else{
        console.log(foundUser.username)
        const token=jwt.sign({
            username:foundUser.username
        },JWT_SECRECT);
        res.send({
            token:token
        })
    }
    
})

function auth(req,res,next){
    const token=req.headers.token;

    const decodeuser=jwt.verify(token,JWT_SECRECT);

    if(decodeuser.username){
        req.username=decodeuser.username;
        next();
    }else{
        res.json({
            message:"You are not logged in"
        })
    }
}
app.get("/me",auth,function(req,res){


    let foundUser=null;
    for(let i=0;i<users.length;i++){
        if(users[i].username===req.username){
            foundUser=users[i];
        }
        
 
    }
    console.log(foundUser);
    res.json({
        username:foundUser.username,
        password:foundUser.password
    })

})



app.listen(3000)