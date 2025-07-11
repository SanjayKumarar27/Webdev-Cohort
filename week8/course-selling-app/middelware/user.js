require('dotenv').config()
const jwt=require("jsonwebtoken");

const jwtuser=process.env.JWT_USER_SECRECT;

function userMiddleware(req,res,next){
    const token=req.headers.token;
    const decoded=jwt.verify(token,jwtuser)

    if(decoded){
        req.userId=decoded.id;
        next();
    }else{
        res.status(403).json({
            message:"Your not signed In"
        })
    }

}

module.exports=({
    userMiddleware:userMiddleware
})