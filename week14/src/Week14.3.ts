//advance apis of tyepscript
// interface User{
//     name:string,
//     age:number
// }

// function SumofAge(a:User,b:User){
//     return a.age+b.age;
// }

// let a=SumofAge({name:"sanjay",age:43},{name:"kumar",age:23});
// console.log(a);

//Pick api used pick value from type and interface
// interface User{
//     id:number,
//     name:string,
//     age:number,
//     email:string,
//     password:string
// }

// type updateUser=Pick<User,'name'|'email'|'password'>

// //Partial eayliy make properties ooptional
// type updateUserpartial=Partial<updateUser>

// function updateuser(updatedprop:updateUserpartial){

// }
//Readonly api
//can be applied like this 
// type  User={
//     readonly name:string,
//     readonly age:number
// }

// Or while creating objecct
// type  User2={
//      name:string,
//      age:number
// }

// function log(u:Readonly<User2>){

// }
// .........................................................................................................

//Records and Maps

//Records arre a clener way to create objects in tyepscript it is typescripts specific concept

type User={
    nmae:string,
    age:number
}

type UserArr={
    [key:string]:User
}

const a:UserArr={
    "a1":{nmae:"sanjay",age:21},
    "a2":{nmae:"sanjay",age:21},
    "a3":{nmae:"sanjay",age:21}
}

//using Record 
type employee=Record<string,User>//same as adding key of string to the user Type

const user=new Map()
const user2=new Map<string,User>()//these ate few other ways to create 

user.set("a1",{name:"sanjay"})
user2.set("a1",{nmae:"sanjay",age:21})

user.get("a1");


// ....................................................................................
