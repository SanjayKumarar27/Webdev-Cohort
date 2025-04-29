// class Rectangle {
//   constructor(width, height, color) {
//      this.width = width;
//      this.height = height;
//      this.color = color; 
//   }
  
//   area() {
//     const area = this.width * this.height;
//     return area;
//   }
  
//   paint() {
//      console.log("Painting with color "+this.color);
//   }
  
// }

// const rect = new Rectangle(2, 4,"red");//instanstiate obj rect from reactangle class
// const area = rect.area();//cleaner way to whrite a object;
// console.log(area)
// console.log(rect.paint());


// const now = new Date(); // Current date and time(this is also a class)
// console.log(now.getFullYear()); // Outputs the date in ISO format


// const map = new Map();
// map.set('name', 'Alice');
// map.set('age', 30);
// console.log(map);

// const nap=new Map();
// nap.set('n',23);
// console.log(nap.get('n'));



// function loagName(){
//   console.log("harkirat");
// }

// setTimeout(loagName,3000);//call back logName function after 3000 ms passed


//callback based approch
//promise based approch
//both used to call async operation but promise is a cleaner way to do it 

//A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


// function setTimeoutPromisified(ms) {
//   let p=new Promise(resolve => setTimeout(resolve, ms));
//   return p;
//   //
//   // this returns a object pf promice class similar to the 
//   // new Date() returning the object of the date class
//   //
//   // promice is better way to write call 
//   // promices are syntacticaly better way write  

// }

// function callback() {
// 	console.log("3 seconds have passed");
// }
// //what is .then 
// let p=setTimeoutPromisified(3000).then(callback)

// console.log(p);

// function waitfor3s(resolve){
//   setTimeout(resolve,3000);
// }
// function setTimeoutPromisified()
// {
//   return new Promise(waitfor3s);//when ever the waitfor3s is called the the first argumnet of waitfor 3s call the func/var present after .then function
// }
// function main(){
//   console.log("main is called");
// }

// // waitfor3s(main);
// setTimeoutPromisified().then(main);


// function random(resolve){//resolve is also a function
//   // resolve();
// }
// let p=new Promise(random);//promice is supposed to return something 
// // and promice represent eventual complition of something (a asynochonus funtion )
// // so when ever a object or instance of a promice is created then we should also call the .then function 
// // so when is the promice class is called we have to specify when does the eventual compilation happen to
// // menttion that we here passed function random and we desribe it there
// // 
// // promice class -> call function(random)-> calls resolve the->


// // using the promice
// function callback(){
//   console.log("promice succeded");
// }
// p.then(callback);
// // console.log(p);

// const fs= require("fs");



// function reFile(eg,encd){
//  return new Promise((resolve,reject)=>{
//   fs.readFile(eg,encd,(err,data)=>{
//     if(err){
//       reject(err);
//     }else{
//       resolve(data);
//     }
//   });
//  });
// }


// reFile("a.txt","utf-8").then(content => console.log(content));


// console.log("----top_of-the-file-----");
// const fs=require("fs");

// function readTheFile(s){
  //   fs.readFile("a.txt","utf-8",function(err,data){
    //     s(data);
//   })
// }
// function readFile(){
  //   return new Promise(readTheFile);
  // }
  // const p= readFile();
  
  // function callback(content){
    //   console.log(content);
    // }
    
    // p.then(callback);
    // console.log("----Bottom_of-the-file-----");
    
    
    // console.log("----top_of-the-file-----");
    
    // function readTheFile(resolve){

    //   console.log("readTheFile called");
      
    //   setTimeout(function(){
    //     console.log("callback based setTimeout complete");
    //     resolve();
    //   },3000);
    // }
    
    // function setTimeoutPromisified(filename){
    //   console.log("setTimeoutPromisified called");
    //   return new Promise(readTheFile);
    // }
    
    // const p=setTimeoutPromisified();
    
    // function callback(){
    //   console.log("timer is dome");
    // }
    
    // p.then(callback);
    // console.log("----Bottom_of-the-file-----");


    // class Promise2{
    //   constructor (fn){
    //     function afterdone(){
    //       this.resolve();
    //     }
    //     fn(afterdone);
    //   }
      
    //   then(callback){
    //     this.resolve = callback;
    //   }
    // }
    function readTheFile(resolve){

      console.log("readTheFile called");
      
      setTimeout(function(){
        console.log("callback based setTimeout complete");
        resolve();
      },3000);
    }

    function setTimeoutPromisified(){
      return new Promise2(readTheFile);
      
    }

    let p=setTimeoutPromisified();

    function callback(){
      console.log("callback has been called");
    }

    p.then(callback);




