
import { useEffect, useRef, useState } from 'react'
import './App.css'




function App() {
  
  const [socket,Setsocket]=useState<WebSocket>();
  const inputref=useRef<HTMLInputElement>(null);

  function SendMessage(){
    if(!socket){
      return;
    }if(!inputref.current){
      return;
    }
    const message=inputref.current.value;
    
    socket.send(message);
  }
  useEffect(()=>{
    const ws=new WebSocket('ws://localhost:8080');
    Setsocket(ws);
    ws.onmessage=(ev)=>{
      alert(ev.data);
    }
  },[])

  return <div>
     
    <input ref={inputref}  type="text" placeholder='' />
    <button onClick={SendMessage}>Send</button>
  </div>
}

export default App;
