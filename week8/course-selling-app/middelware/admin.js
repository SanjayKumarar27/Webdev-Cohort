const jwt=require("jsonwebtoken");
require("dotenv").config();
const jwtadmin=process.env.JWT_ADMIN_SCERECT;

function adminMiddelware(req,res,next){
    const token=req.headers.token;
    console.log(token);
    const decoded=jwt.verify(token,jwtadmin)

    if(decoded){
        req.adminId=decoded.id;
        next();
    }else{
        res.status(403).json({
            message:"Your not signed In"
        })
    }
}

module.exports=({
    adminMiddelware:adminMiddelware
})