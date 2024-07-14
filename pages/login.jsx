import Link from 'next/link'
import React from 'react'

function login() {
  return (
    <div className="w-screen h-screen flex justify-center">
    <div className="w-10/12 md:w-3/12 shadow-md  rounded-md self-center flex flex-col border-2  h-96">
      <div className=" mt-6 rounded-lg border-2  bg-slate-300 w-5/12 self-center flex flex-row justify-center ">
        <p className="active p-0.5 font-medium px-2 rounded-lg transition-colors duration-150">
          Login
        </p>
        <p className=" p-0.5 font-medium px-2 rounded-lg transition-colors duration-150">
          Signin
        </p>
      </div>
     
      <label htmlFor="name" className="px-6 font-medium mt-2 ">
        Email:
      </label>
      <input
        type="email"
        name="email"
        className="w-10/12 bg-slate-200 border-2 h-10 self-center font-medium px-2"
      />
      <label htmlFor="name" className="px-6 font-medium mt-2 ">
        Passward:
      </label>
      <input
        type="password"
        name="passward"
        className="w-10/12 focus:ring-pink-300 from-fuchsia-300 bg-slate-200 border-2 h-10 self-center font-medium px-2"
      />
      <button
        type="button"
        className="w-10/12 self-center bg-pink-300 p-2 mt-4 rounded-sm font-medium active:bg-pink-400 transition-colors duration-100">
    Login
      </button>
      <div className="mt-2 self-center flex flex-row gap-1">
       Don't have an account?{" "}
        <p className="text-blue-500 active:text-blue-500 transition-all duration-100">
          <Link href={'/'}>
          Signup
          </Link>
        </p>{" "}
      </div>
    </div>
  </div>
  )
}

export default login
