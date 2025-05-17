const express=require("express");

const app=express();

//express is chain of middleware
//middle ware is function which has acces to req res  objects and some next funtoin 
// functions of middleware
// may or may not modify the changes made in the req object can be seen from the middle ware
// endding/stop  the req
// call next()

// used of authentinaction 

function middleware(req,res,next){
console.log(`Request Method: ${req.method}`);
    console.log(`Host is ${req.hostname}`);
    console.log("Route is "+req.url);
    console.log(new Date());
    next();

}
app.get("/add",(req,res)=>{
    let a=parseInt(req.query.a);
    let b=parseInt(req.query.b);
    res.json({
        ans:a+b
    })
    
});

app.use(middleware);
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