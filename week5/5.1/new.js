const express=require("express");
const bodyparser=require("body-parser");

const app=express();


// app.use(bodyparser.json());


app.post("/add",(req,res)=>{
    console.log(req.body);
    let a=parseInt(req.query.a);
    let b=parseInt(req.query.b);

    res.json({
        ans:a+b
    })
})

app.listen(3000);

//cors cross origin requests 