import { useState,useEffect ,useRef} from "react"
import './App.css'
import { useFetch, usePosttitle } from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";
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
//usefecth costum Hook

// function App(){
//   const [id,setid]=useState(1);
//   // const posttitle=usePosttitle();
//   const {Data,loading}=useFetch("https://jsonplaceholder.typicode.com/posts/"+id);
//   if(loading){
//     return <div>
//       Loding.....
//     </div>
//   }
//   return <div>
//     <button onClick={()=>setid(1)}>1</button>
//     <button onClick={()=>setid(2)}>2</button>
//     <button onClick={()=>setid(3)}>3</button>
//     {JSON.stringify(Data)}
//   </div>
// }


// export default App;

//usePrev Custom Hook

// function App(){
//   const [count,SetCount]=useState(0);
//   const prev=usePrev(count);
//   return <div>
//     {count}
//     <br />
//     <button onClick={()=>SetCount(c=>c+1)}>Click me</button>
//     <p>The previous value is {prev}</p>
//   </div>
// }

// export default App;

// useDebounce is used to call the function which is expensive
// like if there are multiple call on the same function a lot of time then the useDebounce help to 
// delay the expensive function call

// function useDebounce(orignalfn){
//   const Cuurentclock=useRef();
//   const fn=()=>{
//     clearTimeout(Cuurentclock.current);
//     Cuurentclock.current=setTimeout(orignalfn,200);
//   }
//   return fn;
// }

// function App(){
//   function searchbackend(){
//     fetch("Api.amozon.com/search")
//   }
//   const Debouncedfn=useDebounce(searchbackend);
//   return <div>
//     <input type="text" onChange={Debouncedfn}/>
//   </div>
// }

// export default App;

// import { useState, useEffect } from 'react';

// const useDebounce = (value, delay) => {
//     const [debouncedValue, setDebouncedValue] = useState(value);

//     useEffect(() => {
//         const handler = setTimeout(() => {
//             setDebouncedValue(value);
//         }, delay);

//         return () => {
//             clearTimeout(handler);
//         };
//     }, [value, delay]);

//     return debouncedValue;
// };

// export default useDebounce;
