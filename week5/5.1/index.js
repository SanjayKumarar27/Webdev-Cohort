const express=require("express");

const app=express();

app.get("/add",(req,res)=>{
    let a=parseInt(req.query.a);
    let b=parseInt(req.query.b);
    res.json({
        ans:a+b
    })

});

app.get("/multiply",(req,res)=>{
    let a=parseInt(req.query.a);
    let b=parseInt(req.query.b);
    res.json({
        ans:a*b
    })

});
app.get("/sub",(req,res)=>{
    let a=req.query.a;
    let b=req.query.b;

    res.json({
        ans:a-b
    })

});
app.get("/div",(req,res)=>{
    let a=req.query.a;
    let b=req.query.b;

    res.json({
        ans:a/b
    })

});

app.listen(3000);