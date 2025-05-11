// backend for todo app
const fs=require("fs");

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
});

const express=require("express");
const app = express()



app.get('/', (req, res) => {
        // if we want to extract  body we use req
        // res sends the response to the client 
  res.send('Hello World')// can add a htm here
})

app.post('/', (req, res) => {
    res.send('Hello World')
  })


app.get('/asd', (req, res) => {
    res.send('Hello World')
  })

app.listen(3000)//which port

