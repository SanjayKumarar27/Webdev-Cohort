import { useState,useEffect } from 'react'
import { PostComponent } from './post'

// conditional rendering

// const condition=false; 
// function App() {
  
//   const [conditionvariable,setconditionvariable]=useState(true);
  
//   useEffect(function(){
//     setInterval(function(){
//       setconditionvariable(c =>!c);
//     },5000);
//   },[]);
//   return (
//     <div>
//   {conditionvariable&& <Counter></Counter>}
//   {/* <Counter></Counter> */}
// </div>
//   )
// }

// function Counter(){
//   const [count,setCount]=useState(0);
//   console.log("counter ")

//   //use hooking in react life cycle events 
//   //here we are running the setinterveal function on everyrender causing to starta new timer every time it renders
//   // so we want setInterval to  run only once 
// //   //So we use mounting in react which can be used by useeffect hook
// //     A React component undergoes three primary phases during its existence: 
// // Mounting Phase: we have to have the setInterval in the mounting phase 
// //  Updating Phase:
// // // Unmounting Phase:

// //this is used for mounting the objects in the react 
// useEffect(function(){
//   console.log("mount to page")
//   const clock=setInterval(function(){
//     console.log("setInterval is called")
//      setCount(C=>C+1);
//    }, 1000);
//   //  console.log("mounted")
//   return function (){
//     console.log("unmounted to the page");
//     clearInterval(clock);
//   }
//   },[]); // Yet to do cleanup,dependecy array and fetch insid useeffect

//   // function increasecount(){
//   //   setCount(count + 1);
//   // }

//   // function decreasecount(){
//   //   setCount(count - 1);
//   // }

//   // function resetcount(){
//   //   setCount(0);
//   // }


//   return <div>
//     <h1>{count}</h1>
//     {/* <button onClick={increasecount}>Increase Count  </button> */}
//     {/* <button onClick={decreasecount}>Decrease Count  </button> */}
//     {/* <button onClick={resetcount}>Reset    Count  </button> */}
//   </div>
// }
// function App(){
//   // const [count,secount]=useState(0);
//   // function increase(){
//   //   secount(c=>c+1);
//   // }
//   return ( <div>
//     <Counter count={count}/>
//     <button onClick={increase}>Increase</button>
//    After counter
//     </div>
//   )
// }

// function Counter(props){
//   useEffect(function(){
//      console.log("mount")
//     return function(){
//       console.log("unmount");
//     }
//   },[])
//   return (
//     <div>Counter {props.count}</div >
//   )
// }


function App(){
  const [posts,setpost]=useState([]);


  const postcomponent=posts.map(post=>
    <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
    />
  
  )


  function addpost(){
    setpost([...posts,{
    name:"Sanjay",
    subtitle:"1000 followers",
    time:"3m ago",
    image:"D:\Sanjay\documents\passport size photo.jpg",
    description:"Want win big See the folks who won 300$"
    }])
  }
  return (
    <div style={{background:"#dfe6e9",height:"100vh"}}>
      <button onClick={addpost}>Add post </button>
      <div style={{display:'flex',justifyContent:'center'}}>
        <div>
          {postcomponent}
          
        </div>
      </div>
    </div>
  )
}
export default App
