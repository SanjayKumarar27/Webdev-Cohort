import React, { useState,useContext } from "react";
import { useRef } from "react";

// import {BrowserRouter,Routes,Route,Link,useNavigate,Outlet} from "react-router-dom";

// function App() {
//  return <div>
//   {/* <a href="/">Allen</a> 
//   |
//   <a href="/neet/online-coaching-class-11">Class 11 </a>
//   | 
//   <a href="/neet/online-coaching-class-12">Class 12</a> */}

// <BrowserRouter>

//   <Routes>
//     <Route path="/" element={<Layout/>}>
//     <Route path="/neet/online-coaching-class-11" element={<Class11Program/>}/>
//     <Route path="/neet/online-coaching-class-12" element={<Class12Program/>}/>
//     <Route path="/" element={<Landing/>}/>
//     <Route path="*" element={<Errorpage/>}/>
//     </Route>
//   </Routes>
// </BrowserRouter>
//  </div>
// }
// function Layout(){
//   return <div style={{height:"100vh",background:"green"}}>
//     <Headers/>
//     <div style={{height:"80vh",background:"red"}}>
//     <Outlet/> 
//     </div>
//     footer
//   </div>
// }

// function Headers(){
//   return <div>
// <Link to="/"> Allen </Link>|
// <Link to="/neet/online-coaching-class-11">Class 11 </Link>|
// <Link to="/neet/online-coaching-class-12">Class 12 </Link>   
//   </div>
// }
// function Errorpage(){
//   return <div>
    
//     Sorry page not found 
//   </div>
// }
// function Class11Program(){
//   return <div>
//     Hai there is this is class 11  room
//   </div>
// }
// function Class12Program(){
// const navigate= useNavigate();
// function redirectUser(){
//   navigate("/");
// }
// return <div>
//     Hai there is this is class 12 room
//     <button onClick={redirectUser}> Back to home</button>
//   </div>
// }
// function Landing(){
//   return <div>
//     Wellcome to udemy 
//   </div>
// }
// export default App


// useRef
// helps us to create a refrences to a value such that when a value changes the component does 
// not rerender 

// function App(){
//   function FocusText(){
//     // document.getElementById("name").focus();
//     inputref.current.focus();
//   }
//   const inputref=useRef();
//   return <div>
//     Sign UP 
//     <br /><br />
//     <input ref={inputref} id="name" type="text" />
//     <br /><br />
//     <input type="text" />
//     <br /><br />
//     <button onClick={FocusText}>Submit</button>
//   </div>
// }

// export default App;

//clock using useref having stop and stop functionality which doesnot trigger the rerender 
// function App(){
//   const [count,Setcount]=useState(1);
// we cannot use let variables here as they get reinitialsied every time the component rerenders so its a bad idea to use let or const varidale
//  in a react component unless its serves it function
// we can use useState but the rule that useState is used to only for the components that are rendered in the 
// dom which doesnot make sense 
// here useref make sense were we have to store a value and which does not triggger the rereder and gett affeted bay this 

//   const timer=useRef();

// function startimer(){
//    let value= setInterval(() => {
//       Setcount(c=>c+1);
//     }, 1000);
//     timer.current=value;
//   }
//   function stoptimer(){
//     clearInterval(timer.current);
//   }
//   return <div>
//     {count}
//     <br /><br />
//     <button onClick={startimer}>Start</button>
//     <button onClick={stoptimer}>Stop</button>
//   </div>
// }

// export default App;


//.........................................................................................................
// state mamagement in REact for making large projects in React USING CONTEXT API
//using light bulb example



//here the BulbOn is a prop for the BulbState componaent 
  //here the  SetBulbOn is a prop for the ToggleBulbState componaent
  
  // /learing about prop drilling ie passing prop through multiple componente
  // to solve this problem we use Contex api help to solve above poblem b
  // in 3 steps
  // 1. creating a context variable outside th component 
  // 2. provding the variable with object which need to be passed to other component
  // 3. using the component

const BulbContext=React.createContext();

function BulbProvider({children}){
  const [BulbOn,SetBulBOn]=useState(true);
  return <BulbContext.Provider value={{
      BulbOn:BulbOn,
      SetBulBOn:SetBulBOn
    }}>
      {children}
    </BulbContext.Provider>
}
function App(){
  return <div>
    <BulbProvider>
    <Light />
    </BulbProvider>
  </div>
}

function Light(){  
  return <div>
    <LightBulbs/>
    < LightSwitch/>
  </div>
}

function LightBulbs(){
  const {BulbOn}=useContext(BulbContext);
  return <div>
    {BulbOn ? "Bulb On":"Bulb Off"}
  </div>
} 

function LightSwitch(){
  const {BulbOn,SetBulBOn}=useContext(BulbContext);
  function switchonoff(){
      SetBulBOn(!BulbOn);
  }
  return <div>
    <button onClick={switchonoff}>Toggle the Bulb</button>
    </div>
}

export default App;