import React from "react";
import { ImLibrary } from "react-icons/im";
import { FaSearchPlus } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import Link from "next/link";
function Nabar() {
  return (
    <div className="bg-pink-300 self-center w-10/12 rounded-lg h-10 fixed bottom-2 md:w-10/12 flex flex-row justify-evenly">
      <div className="flex flex-col self-center justify-center">
       <Link href={'/bookfeed'}>
        <ImLibrary className="self-center text-gray-700 active:text-gray-900  text-2xl alt" />
        </Link>
      </div>
      <div className="flex flex-col self-center justify-center">
      <Link href={'/Searchbar'}>
      <FaSearchPlus className="self-center text-gray-700 active:text-gray-900  text-2xl alt"/>
      </Link>
      </div>
      <div className="flex flex-col self-center justify-center">
        {" "}
      <Link href={'/'}>
        <IoMdAddCircle className="self-center text-gray-700 active:text-gray-900  text-3xl" />
        </Link>
      </div>
      <div className="flex flex-col self-center justify-center">
        <Link href={'/profile'}>
        <IoPersonCircleOutline className="self-center text-gray-700 active:text-gray-900  text-3xl" />
        </Link>
      </div>
    </div>
  );
}

export default Nabar;
