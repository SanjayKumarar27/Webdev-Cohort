import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Join } from "./pages/join";
import { Chat } from "./pages/chat";
import { useEffect } from "react";
import { ConnectWebSocket } from "./ws";




function App() {

  useEffect(()=>{
    ConnectWebSocket();
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Join />} />
        <Route path="/chat/:roomId" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
