
// function main(){
//     fetch('https://jsonplaceholder.typicode.com/posts'  )
//     .then(async (response)=>{
//         const json = await response.json();
//         console.log(json);
//         //await response.json()
//     });
    
// }

// main();

// async function main2(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const json = await response.json();
//     console.log(json);
// }

// main2();

// axios will also do the same job using axios library

const axios = require('axios');

async function main(){
    const response=await axios.get('https://jsonplaceholder.typicode.com/posts');
    // response.data is the json data cuts down one step from fetch
    console.log(response.data.length);
}


main();


