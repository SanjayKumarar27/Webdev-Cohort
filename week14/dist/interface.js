"use strict";
// function greet(user:{
//     name:string,
//     age:number
// }){
//     console.log("Hello "+user.name);
// }
Object.defineProperty(exports, "__esModule", { value: true });
//using array in type script 
function LegalList(arr) {
    const ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age >= 18) {
            ans.push(arr[i]);
        }
    }
    return ans;
}
