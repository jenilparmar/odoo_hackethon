import Nabar from "@/Components/Nabar";
import ProfileBooks from "@/Components/ProfileBooks";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
function profile() {
 
  return (
    <div className="h-fit w-full flex flex-col">
      <div className="bg-pink-300 w-full h-16 rounded-2xl flex flex-row -mt-2 p-4  font-semibold md:justify-between text-xl">
        Hello Jenil!!
      </div>
      <div className="w-full h-40 flex flex-row justify-center gap-2">
        <div className="rounded-full self-center bg-pink-400 w-28 h-28" style={{
          backgroundImage:'url(https://img.freepik.com/premium-vector/man-male-young-person-icon_24877-30222.jpg)',
          backgroundPosition:"center",
          backgroundSize:"cover",
          backgroundRepeat:"no-repeat"
        }}></div>
        <div className="flex flex-col justify-center">
          <p className="font-medium">@jenil</p>
          <p className="text-gray-700 text-sm">Admin</p>
          <p className="text-pink-300 flex flex-row gap-1 hover:text-pink-400 active:text-pink-400">
            <CiEdit className="text-xl" /> Add Your Information
          </p>
        </div>
      </div>  
      <div className="w-full h-28 px-6 text-md ">
        <p>Mobile number:- 8849577787</p>
        <p>Email:- jenilparmar94091@gmail.com</p>
        <p>Adress:- Gandhinagar,Gujrat</p>
      </div>
    <div className=" mx-8 relative top-6 -left-1  mt-1 p-2 bg-pink-400 -my-8  w-28 text-center font-bold rounded-lg" style={{
      marginBottom:"-22%"
    }}>My Books</div>
    <ProfileBooks/>

<Nabar/>
    </div>
  );
}

export default profile;
