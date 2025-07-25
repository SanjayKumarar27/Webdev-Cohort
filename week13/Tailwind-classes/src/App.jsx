
import './App.css'
import { Otp } from './components/otp'

// function App() {
//   return <div className='grid grid-cols-12 '>
//  {/* <div > */}
//     <div className='col-span-12 sm:col-span-6 bg-blue-600 text-white-2xl rounded-full'> child 1 </div>
//     <div className='col-span-12 sm:col-span-4 bg-green-100'> child 2 </div>
//     <div className='col-span-12 sm:col-span-2 bg-red-100 '> child 3 </div>
//   </div>
  
// }

function App(){
  return <div className='text-center bg-[#002b5b] h-screen font-sans '>
    <div className=' font-sans pt-9 mb-9 font-sm text-[#36c6c0] text-2xl'>
     <span> Webinar.<span className='text-white'>gg</span></span>
    </div>
    <div className='mb-9 text-white font-bold text-xl'>
      Enter Your opt
    </div>
    <div >
    <Otp/>
    </div>
    {/* <div className='mb-2 text-sky-200'>
      please confirm your birth year.This data will not be stored
    </div>
    <div className='mb-4 opacity-25'>
      <input type="text" placeholder='Your birth year'className='rounded p-1 text-xs w-38 text-black font' ></input>
    </div>
    <div >
      <button className='bg-[#8094ad] p-1 pl-9 pr-9 rounded text-sm w-38 text-white font-bold'>continue</button>
    </div> */}
  </div>
}

export default App
