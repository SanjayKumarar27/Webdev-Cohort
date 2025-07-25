
import {useRef} from 'react';

export function Otp(){
    const ref1=useRef();
    const ref2=useRef();
    const ref3=useRef();
    const ref4=useRef();
    const ref5=useRef();
    const ref6=useRef();

    return <div className="flex justify-center">
        <Subotpbox refrence={ref1} onDone={()=>{
            ref2.current.focus();
            }}/>
        <Subotpbox  refrence={ref2} onDone={()=>{
            ref3.current.focus();
            }}/>
        <Subotpbox  refrence={ref3} onDone={()=>{
            ref4.current.focus();
            }}/>
        <Subotpbox refrence={ref4} onDone={()=>{
            ref5.current.focus();
            }}/>
        <Subotpbox refrence={ref5} onDone={()=>{
            ref6.current.focus();
            }}/>
        <Subotpbox refrence={ref6} />
    </div>
}

function Subotpbox({ refrence,onDone}){
    return <div >
        <input ref={refrence} onChange={(e)=>{ onDone() }} type="text" 
        className=" m-1 w-[40px] h-[50px] rounded-xl bg-[#19406a] outline-none px-4 text-white">
    </input>
    </div>
}