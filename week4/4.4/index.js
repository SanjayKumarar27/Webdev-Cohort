// const express=require("express")

// const app=express();

// // function isoldenough(age){
// //     if(age>=14){
// //         return true;
// //     }else{
// //         return false;
// //     }
// // }

// function isoldenoughmiddleware(req,res,next){
//     const age=req.query.age;
//     if(age>=14){
//         next();
//     }else{
//         res.json({
//             msg:"Sorry you are not age yet"
//         })
//     }
// }


// app.get("/ride1",isoldenoughmiddleware,(req,res)=>{    
//         res.json({
//             msg:"You have successfully ridden the ride 1"
//         })
// })

// app.get("/ride2",isoldenoughmiddleware,(req,res)=>{
//     res.json({
//         msg:"You have successfully ridden the ride 2"
//     })
// })

// app.listen(3000);
// You have to create a middleware for logging the number of requests on a server

