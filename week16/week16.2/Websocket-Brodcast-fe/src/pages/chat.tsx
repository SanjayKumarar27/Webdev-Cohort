import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getSocket } from "../ws";
import "../App.css"
export function Chat() {
    const { roomId } = useParams();
    const [message, Setmessage] = useState<string[]>([]);
    const [input, Setinput] = useState("");
    useEffect(() => {
        const socket = getSocket();
        if (!socket) {
            return;
        }
        socket.onmessage = (event) => {
            Setmessage((prev) => [...prev, event.data])

        }


    }, []);
    function Sendmessage() {
        const socket = getSocket();
        if (!socket) {
            return;
        }

        const item = {
            type: "chat",
            payload: {
                roomId: roomId,
                message: input

            }
        }
        console.log(JSON.stringify(item))
        socket.send(JSON.stringify(item));
        Setinput("");
    }
    return   <div className="flex flex-col h-screen bg-[#f6f5f4] text-neutral-800">
      {/* Header */}
      <div className="bg-white p-4 border-b border-neutral-200 font-medium flex justify-between items-center">
        <span>Room: {roomId}</span>
        <span className="text-sm text-neutral-500">Workspace Chat</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-3">
        {message.map((msg, idx) => (
          <div
            key={idx}
            className="bg-white border border-neutral-200 p-3 rounded-lg shadow-sm max-w-lg"
          >
            {msg}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex p-4 bg-white border-t border-neutral-200">
        <input
          type="text"
          className="flex-1 p-3 rounded-l-lg border border-neutral-300 bg-[#fbfaf9] focus:outline-none focus:border-blue-400 transition"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => Setinput(e.target.value)}
        />
        <button
          onClick={Sendmessage}
          className="bg-blue-500 hover:bg-blue-600 px-5 rounded-r-lg text-white font-medium transition"
        >
          Send
        </button>
      </div>
    </div>
}