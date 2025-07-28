// function greet(user:{
//     name:string,
//     age:number
// }){
//     console.log("Hello "+user.name);
// }

import { NumberLiteralType } from "typescript";

// greet({
//     name:"Sanjay",
//     age:21
// })

// let user={
//     name:"Sanjay",
//     age:21
// }
// greet(user)

//type can be simple number string
//or objects

//what are interfaces why is interfaces required 

// interface UserType{
//     firstname:string,
//     lastname:string,
//     age:number
// }

// function greet(user:UserType){
//     console.log("Hello "+user.firstname);
// }

// let user:UserType={
//     firstname:"Sanjay",
//     lastname:"kumar",
//     age:23
// }

// greet(user)

// type S=string|number

// function add(x:S,y:S){
//     return x+y;
// }

// add(1,"add");


// interface Person{
//     name:string,
//     age:number,
//     // greet():string
//     isLegal():boolean
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

// class Manager implements Person{

//     name:string;
//     age:number;
//     constructor(name:string,age:number ){
//         this.name=name;
//         this.age=age;
//     }
//     isLegal(): boolean {
//         return this.age>18
//     }

// }

// const user=new Manager("sanjay",23)
// console.log(user)

// class Shape {
//     area(){
//         console.log("This is area")
//     }
// }

// class Reactangle extends Shape{
//     width:number;
//     height:number;

//     constructor(){
//         super()//call the consturtor of the parent class
//         this.width=1;
//         this.height=2;
//     }
// }

//abstarct class

//types vs interface
//abstract vs interface 

// abstract class User{
//     name:string;
//     constructor(name:string){
//         this.name=name
//     }
    
//     hello(){
//         console.log("Hai there how are you");
//     }
//     abstract greet():string;
// }

// class Employee extends User{
//     name:string;
//     constructor(name:string){
//         super(name);
//         this.name=name;
//     }

//     greet(){
//        return "Hai  "+this.name; 
//     }
// }


// interface user{
//     name:string,
//     age:number
// }

//type cannot be implemented
//type let us to do union and intersections 
//interface cannot do not let us to do union and intersections 
// type User={
//     name:string,
//     age:number
// }

// function isLegal(user:User){
//     return user.age>18;
// }


// type Employee={
//     name:string,
//     startdate:string;
// }

// type Manager={
//     name:string,
//     deparment:string;
// }

// type TeamLead=Employee & Manager;//intersection 
// type NewTeamLead=Employee | Manager;//Union 

// let e:Employee={
//     name:"Sanjay",
//     startdate:"0427"
// }

// let m:Manager={
//     name:"Vinay",
//     deparment:"Civil"
// }

// let t:TeamLead={
//     name:"same",
//     startdate:"024",
//     deparment:"Civil"
// }


// interface  Admin{
//     name:string,
//     permision:string
// }

// interface user{
//     name:string,
//     age:number
// }

// type UserOrAdmin=Admin|user;

// function greet(a:UserOrAdmin){
//     console.log(a.name);
// }

interface User{
    firstName:string,
    lastName:string,
    age:number
}
//using array in type script 
function LegalList(arr:User[]):User[]{
    const ans:User[]=[];

    for(let i=0;i<arr.length;i++){
        if(arr[i].age>=18){
            ans.push(arr[i]);
        }
    }
    return ans;
}