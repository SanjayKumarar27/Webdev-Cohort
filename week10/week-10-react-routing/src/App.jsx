import React from "react";
import {BrowserRouter,Routes,Route,Link,useNavigate,Outlet} from "react-router-dom";

function App() {
 return <div>
  {/* <a href="/">Allen</a> 
  |
  <a href="/neet/online-coaching-class-11">Class 11 </a>
  | 
  <a href="/neet/online-coaching-class-12">Class 12</a> */}

<BrowserRouter>

  <Routes>
    <Route path="/" element={<Layout/>}>
    <Route path="/neet/online-coaching-class-11" element={<Class11Program/>}/>
    <Route path="/neet/online-coaching-class-12" element={<Class12Program/>}/>
    <Route path="/" element={<Landing/>}/>
    <Route path="*" element={<Errorpage/>}/>
    </Route>
  </Routes>
</BrowserRouter>
 </div>
}
function Layout(){
  return <div style={{height:"100vh",background:"green"}}>
    <Headers/>
    <div style={{height:"80vh",background:"red"}}>
    <Outlet/> 
    </div>
    footer
  </div>
}

function Headers(){
  return <div>
<Link to="/"> Allen </Link>|
<Link to="/neet/online-coaching-class-11">Class 11 </Link>|
<Link to="/neet/online-coaching-class-12">Class 12 </Link>   
  </div>
}
function Errorpage(){
  return <div>
    
    Sorry page not found 
  </div>
}
function Class11Program(){
  return <div>
    Hai there is this is class 11  room
  </div>
}
function Class12Program(){
const navigate= useNavigate();
function redirectUser(){
  navigate("/");
}
return <div>
    Hai there is this is class 12 room
    <button onClick={redirectUser}> Back to home</button>
  </div>
}
function Landing(){
  return <div>
    Wellcome to udemy 
  </div>
}
export default App


// useRef