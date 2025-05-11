const express=require("express");
const path=require("path");

const app=express();

const todo=[];

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"todo.html"))

});

app.listen(3000);

