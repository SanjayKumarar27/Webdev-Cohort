
import { useRef} from 'react'
import '../App.css'
import {  getSocket } from '../ws';
import { useNavigate } from 'react-router-dom';

export function Join() {
    //   const inputref=useRef<HTMLInputElement>(null)
    const roomref = useRef<HTMLInputElement>(null)

    const navigate=useNavigate();
    function SendMessage() {
      
        const socket = getSocket();
        if (!socket) {
            return;
        }
        if (!roomref.current) {
            return;
        }
        const id = roomref.current.value;
        const item = {
            type: "join",
            payload: {
                roomId: id
            }
        }

        socket.send(JSON.stringify(item));
        navigate(`chat/${id}`);

    }
 
    return  <div className="flex flex-col items-center justify-center h-screen bg-[#f6f5f4] text-neutral-800">
      <div className="bg-white p-8 rounded-xl shadow-sm w-96 border border-neutral-200">
        <h1 className="text-xl font-semibold mb-6 text-center">Join or Create Room</h1>
        <input
          ref={roomref}
          type="text"
          placeholder="Enter Room ID"
          className="w-full p-3 rounded-lg mb-5 border border-neutral-300 bg-[#fbfaf9] focus:outline-none focus:border-blue-400 transition"
        />
        <button
          onClick={SendMessage}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium transition"
        >
          Create / Join
        </button>
      </div>
    </div>

}


