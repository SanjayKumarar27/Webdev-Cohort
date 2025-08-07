import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import './App.css';
import { WebSocket } from 'ws';
function App() {
    const [socket, Setsocket] = useState();
    function SendMessage() {
        if (!socket) {
            return;
        }
        //@ts-ignore
        socket.send("ping");
    }
    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8080");
        //@ts-ignore
        Setsocket(ws);
        ws.onmessage = (ev) => {
            alert(ev.data);
        };
    }, []);
    return _jsxs("div", { children: [_jsx("input", { type: "text", placeholder: '' }), _jsx("button", { onClick: SendMessage, children: "Send" })] });
}
export default App;
//# sourceMappingURL=App.js.map