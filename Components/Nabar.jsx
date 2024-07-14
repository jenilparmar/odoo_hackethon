import React from 'react'
import { ImLibrary } from "react-icons/im";
import { FaSearchPlus } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
function Nabar() {
  return (
    
        <div className='bg-pink-300 self-center w-10/12 rounded-lg h-10 fixed bottom-2 md:w-10/12 flex flex-row justify-evenly'>
   <div className='flex flex-col self-center justify-center'><ImLibrary className='self-center text-gray-700 active:text-gray-900  text-2xl alt'/>
  </div>
   <div className='flex flex-col self-center justify-center'><FaSearchPlus className='self-center text-gray-700 active:text-gray-900  text-2xl'/>
  </div>
  <div className='flex flex-col self-center justify-center'> <IoMdAddCircle className='self-center text-gray-700 active:text-gray-900  text-3xl'/>
 </div>
   <div className='flex flex-col self-center justify-center'><IoPersonCircleOutline className='self-center text-gray-700 active:text-gray-900  text-3xl'/>
  </div>
    </div>
    
  )
}

export default Nabar
