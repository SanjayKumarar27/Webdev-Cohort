const express=require("express");
const jwt=require("jsonwebtoken");


const JWT_SECRECT="sanjaykumarar";

const app=express();

app.use(express.json());

const user=[]

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
} 
app.post("/signup",function (req,res){

    //input validation by zod

    const username=req.body.username
    const password=req.body.password

    user.push(
        {
            username:username,
            password:password
        }
    )
    res.json({
        message:"You are signed Up"
    })
    console.log(user);
})

app.post("/signin",function (req,res){
    const username = req.body.username;
    const password = req.body.password;

    const use = user.find(user => user.username === username && user.password === password);

    if (use) {
        const token = jwt.sign({
            username:use.username
        },JWT_SECRECT);

        // use.token = token; no need to store in db it is stateless token
        res.send({
            token
        })
        console.log(user);
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }

})
app.get("/me",function(req,res){
    const token=req.headers.token;
    console.log(token);
    const decodedinfo=jwt.verify(token,JWT_SECRECT);

    const username=decodedinfo.username;

    let foundUser=user.find(user => user.username===username);
    // let foundUser=null;
    // for(let i=0;i<user.length;i++){
    //     if(user[i].token===token){
    //         foundUser=user[i];
    //     }
    // }
    if(foundUser){
        res.json({
                username:foundUser.username,
                password:foundUser.password
            })
    }else{
        res.json({
            msg:"Invalid Token"
        })
    }
})
app.listen(3000);

//satefull
// needed to stored in the db


//jwt json web tokens
// these are stateless not needed to store in db here jwt is responsible for storing data
// these  reduce one round trip to database
// these are encoded not encrypted

// we need the JWT_SECRET to vrify and we can still decode the jwt without the JWT_SECRET

// jwt can be decoded by anyone
