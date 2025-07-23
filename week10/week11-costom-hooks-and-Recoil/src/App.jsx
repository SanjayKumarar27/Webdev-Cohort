import { useState,useEffect } from "react"
import './App.css'
import { useFetch, usePosttitle } from "./hooks/useFetch";
// function useCounter(){
//   const [count,Setcount]=useState(1);
//   function increaseCount(){
//     Setcount(c=>c+1);
//   }
//   return {
//     count:count,
//     increaseCount:increaseCount
//   }
// }

// function App(){

//   return <div>
//     <Counter/>
//     <Counter/>
//     <Counter/>
//     <Counter/> 
//   </div>
// }

// function Counter(){
//   const {count,increaseCount}=useCounter();
//   return <div>
//     {count}
//     <br />
//     <button onClick={increaseCount}>Increase</button>
//   </div>
// }

// //Custom hoolkss 
// // . any function which starts from use
// // hooks like useState can only be used to create custom hooks or components which use  the hooks
// // we sholud not use hooks in general funtion 



// export default App;


function App(){
  const [id,setid]=useState(1);
  // const posttitle=usePosttitle();
  const {Data,loading}=useFetch("https://jsonplaceholder.typicode.com/posts/"+id);
  if(loading){
    return <div>
      Loding.....
    </div>
  }
  return <div>
    <button onClick={()=>setid(1)}>1</button>
    <button onClick={()=>setid(2)}>2</button>
    <button onClick={()=>setid(3)}>3</button>
    {JSON.stringify(Data)}
  </div>
}


export default App;