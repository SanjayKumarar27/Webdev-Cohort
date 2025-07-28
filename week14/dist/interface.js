"use strict";
// function greet(user:{
//     name:string,
//     age:number
// }){
//     console.log("Hello "+user.name);
// }
// const people:Person={
//     name:"sanjay",
//     age:12,
//     greet(){
//         return "hai";
//     }
// }
// console.log(people.greet());
//class which implements a interface 
class Manager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const user = new Manager("sanjay", 23);
console.log(user);
