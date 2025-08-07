
// import { RecoilRoot, useSetRecoilState, useRecoilValue } from 'recoil';
// import './App.css'
// import { counterAtom } from './store/atoms/counter';


// function App(){
//   return <div>
//       <RecoilRoot>
//       <Counter/>
//       </RecoilRoot>
  
//   </div>
// }
// function Counter(){
  
//   return <div>
//     <CurrentCount/>
//     <Increase />
//     <Decrease/>
//   </div>
// }

// function CurrentCount(){
//   const count=useRecoilValue(counterAtom);
//   return <div>
//     {count}
//   </div>
// }


// function Increase(){
//  const Setcount=useSetRecoilState(counterAtom);
  
//   return <div>
//     <button onClick={()=>Setcount(c=>c+1)}>Increase</button>
//   </div>
// }


// function Decrease(){
//   const Setcount=useSetRecoilState(counterAtom);
  
//   return <div>
//     <button onClick={()=>Setcount(c=>c-1)}>Decrease</button>
//   </div>
// }
// export default App;

//Memo in react 
//In react if parent component re render then all the child components also rerender
// even though there is no state/prop is not passed the child component rerendere

//by warping memo function around the component make children component only rerender when there is a 
// change in the prop change or state chage occur only then the componet is rerendered


//Selector in the recoil 
//selector is drived state of the atom which can only read atom and only rerender if the derive part of the 
//atom in the selecctor is changed
import {RecoilRoot, useRecoilValue,useSetRecoilState} from "recoil";
import { counterAtom, iseven } from "./store/atoms/counter";
import './App.css'
function App(){

  return <div>
    <RecoilRoot>
        <Buttons/>
        <Counter/>
        <IsEven/>
    </RecoilRoot>
  </div>
}

function Buttons()
{
  const SetCount=useSetRecoilState(counterAtom);
  return <div>
    <button onClick={()=>SetCount(c=>c+2)}>Increase</button>
    <button onClick={()=>SetCount(c=>c-1)}>Decrease</button>
  </div>
}

function Counter(){
  const count=useRecoilValue(counterAtom);
  return <div>
    {count}
  </div>
}

function IsEven(){
  const even=useRecoilValue(iseven);

  return <div>
    {even ? "Even":"Odd"}
  </div>
}

export default App;