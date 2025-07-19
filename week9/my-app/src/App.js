import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  // const [count,setCount]=useState(0);

  // return <div>
  //   <Button count={count}setCount={setCount}></Button>
  // </div>
  const [todo,setTodo]=useState([{
    title:"Go to Gym",
    done:false
  }]);

  function addTodo(){
    alert("Hai")
  }
  return <div>
    <button onClick={addTodo}> Add Todo</button>
  </div>
}
// function Button(props){
//   function OnclickHandler(){
//     props.setCount(props.count+1);
//   }
//   return <div>
//     <button onClick={OnclickHandler}>Counter {props.count}</button>
//   </div>
// }

export default App;
