"use strict";
function SumofAge(a, b) {
    return a.age + b.age;
}
let a = SumofAge({ name: "sanjay", age: 43 }, { name: "kumar", age: 23 });
console.log(a);
