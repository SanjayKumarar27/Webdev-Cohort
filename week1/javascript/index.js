// browser can ineterpret html ,css, js, 99% and other webasmebly which is c++ compiled down to webasmebly 
// js code runs line by line (we can write partial code and run by chunks) on sigle thread 
// Variables in JavaScript are not bound to a specific data type. Types are determined at runtime and can change as the program executes

// var a = 1;
// a = "harkirat";
// a = true;

// console.log(a)
// while(1){
//     a++;
// }
// JavaScript executes code in a single-threaded environment, meaning it processes one task at a time. We will dive deeper into this next week.

// let firstName="jhon";
// const age=30;
// var isStudent=true;
// console.log(firstName+" is " + age +" old" );
// console.log(age);

// console.log(isStudent);

// var isStudent=true;
// console.log(isStudent);
// isStudent="sanjay";
// console.log(isStudent);
// isStudent=10;
// console.log(isStudent);


//var.let,const
//only two way to creat variable is let an const
// let isStudent=true;
// const firstName="Sanjay";
// console.log(isStudent);
// firstName=1;


// let number=42;
// let string="Hello World";
// let isActive=false;
// let num=[1,2,3,4,5];

// console.log(arr[6]);




// let age=9;
// let canvote=(age>18);//true or false

// console.log(canvote);


// Function declaration
// function greet(name) {
//     return "Namaste, " + name;
// }


// // Function call
// let message = greet("John"); // "Hello, John"
// let message2 = greet("Cena"); // "Hello, John"

// console.log(message);
// console.log(message2);

// function sum(a,b){
//     let total=a+b;
//     return total;
// }

// let ans=sum(1,3);
// console.log(ans);

// function canVote(a){
//     if(a>18){
//         return true;
//     }else{
//         return false;
//     }
// }

// let age=19;
// let ans=canVote(age);

// console.log(ans);

//if else

// if(age>18){
//     console.log("You are an adult");
// }else{
//     console.log("You are a minor");
// }


//loops


// let user=["sanjay","kumar","raju","gowda"];

// //initaiantion:condition:incrementation


// for(let i=0;i<user.length;i++){
//     console.log(user[i]);
// }

// let user = {
// 	name: "Harkirat",
// 	age: 19
// }
// function greet(user){
//     console.log(user.name+" age is " + user.age);
// }

// greet(user);


// function greet(a){
//     if(a.gender=="Male"){
//         if(a.age>18){
//             console.log("Hi Mr "+a.name+", you can vote");
//         }else{
//             console.log("Hi Mr "+a.name+", you cannot vote");
//         }
//     }else if(a.gender=="Female"){
//         if(a.age>18){
//             console.log("Hi Mrs "+a.name+", you can vote");
//         }else{
//             console.log("Hi Mrs "+a.name+", you cannot vote");
//         }
//     }else{
//         if(a.age>18){
//             console.log("Hi "+a.name+", you can vote");
//         }else{
//             console.log("Hi "+a.name+", you cannot vote");
//         }
//     }
// }

// let user={
//     name:"harkirat",
//     age:34,
//     gender:"Male"
// }

// let user2={
//     name:"Shereya",
//     age:12,
//     gender:"Female"
// }

// greet(user);
// greet(user2);




// arrays of arrays and arrays of objects 


// let arr=[
//     {
//         name:"Sanjay",
//         age:23,
//         gender:"male"
//     },{
//         name:"Kumar",
//         age:12,
//         gender:"male"
//     },{
//         name:"priya",
//         age:22,
//         gender:"female"
//     },{
//         name:"Raghu",
//         age:65,
//         gender:"male"
//     }
// ]

// function sol(a){
//     let ans=[];
//     for(let i=0;i<a.length;i++){
//         if(a[i].age>18 && a[i].gender==="male"){
//             ans.push(a[i]);
//         }
//     }
//     return ans;
// }

// let ans=arr.filter(person=>person.age>18 && person.gender==="male");

// console.log(ans);



