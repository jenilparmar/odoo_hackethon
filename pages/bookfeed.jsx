import React from "react";
import Books from "@/Components/Books";
import { IoMdLogOut } from "react-icons/io";    
function bookfeed() {
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="bg-pink-300 w-full h-16 rounded-2xl flex flex-row -mt-2 p-4  font-semibold md:justify-between text-xl">
      <div className="w-full self-center flex flex-row md:justify-center mt-2">
      <input type="text" className="h-10 w-8/12 px-2 font-normal placeholder:px-2 rounded-md" placeholder="Search Books" />       
      <button type="button" className="p-2 font-medium text-sm self-center active:bg-pink-500 transition-colors duration-100 bg-pink-400 mx-2 md
    :mt-0  rounded-lg">Search</button>
      </div>
      <IoMdLogOut  className="text-2xl text-white self-center mt-2 active:text-pink-400 transition-all md:text-4xl duration-100 "/>
      </div>
<Books/>
    </div>
  );
}

export default bookfeed;
