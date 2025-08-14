
let socket:WebSocket|null=null;

export function ConnectWebSocket(){
    socket=new WebSocket("ws://localhost:8081");
    socket.onopen=()=>{
        console.log("Conneted to server")
    }
    socket.onclose=()=>{
        console.log("Connection disconnected");
    }
    socket.onerror=(event)=>{
        console.log("Connection "+event);
    }

    return socket;
}

export function getSocket(){
    return socket;
}