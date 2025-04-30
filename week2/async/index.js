// function sum(a,b){
//     return a+b;
// }//thread put function somw where in memory

// let ans=sum("20",30);//function is called from memory 
// console.log(ans); //theread is logged


// function sum(n){
//     // let ans=0;
//     // for(let i=1;i<=n;i++){
//     //     ans+=i;
//     // }
//     // return ans;
//     let ans=(n*(n+1));
//     return ans;
// }

// let ans=sum(10);

// console.log(ans);

const fs = require("fs");//import the fs library(fs is an object )

// console.log(fs);
//require is a syntax
// let contents = fs.readFile("a.txt","utf-8");//read the file Asynconously
// console.log(contents);

// const contents2 =fs.readFileSync("b.txt","utf-8");//read the file Synconously
// console.log(contents2);

// // Running I/O bound tasks asynchronosy is better


// function print(err,data){
//     if(err){
//         console.log("File not found");
//     }else{
//         console.log(data);
//     }
// }
// fs.readFile("a.txt","utf-8",print);

// fs.readFile("v.txt","utf-8",print);

// console.log("Done");

// fs.readFile("b.txt","utf-8",function (err ,contents){
//     console.log(contents);
// });

// fs.readFile("a.txt","utf-8",function (err ,contents){
//     console.log(contents);
// });

// why done is first?{
//     2 op
//     1 take 10 min
//     and 2 take 1 min so 
// }



// console.log("Hi!");

// function timeout(){
//     console.log("Click the button");
// }

// setTimeout(timeout, 1000);

// console.log("Welcome to loupe.");

// let c=0;
// for(let i=0;i<100000000000;i++){
//     c=c+1;
// }

// console.log("expenseve operation done");


// console.log("Hi!");

// function timeout(){
//     console.log("Click the button");
// }

// setTimeout(timeout, 10000);

// console.log("Welcome to loupe.");

// let c=0;
// for(let i=0;i<10;i++){
//     c=c+1;
// }

// // console.log("expenseve operation done");
// console.log(c);

// // any function uses refile,fetch, database calls,settimeout;


// console.log("Hi!");

// function timeout(){
//     console.log("Click the button");
// }

// setTimeout(timeout, 10);

// console.log("Welcome to loupe.");

// let c=0;
// for(let i=0;i<10000;i++){
//     c=c+1;
// }

// console.log("expenseve operation done");
// console.log("expenseve operation done");
// console.log("expenseve operation done");
// console.log(c)


