import { useEffect,useRef } from "react";


export function usePrev(value){
    const ref=useRef();// this line runs 1st

    useEffect(()=>{
        ref.current=value;// this at the last 
    },[value])

    return ref.current;// this 2nd
}

// in react the functions first initialsises and then return and then perform the function in side it 