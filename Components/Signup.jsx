import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
  
      const s = await fetch("/api/getuser",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( formData ),
      })
      const res = s;
      localStorage.setItem("name" , formData.name)
      localStorage.setItem("role" , formData.role)
   router.push("/bookfeed")
  };

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="w-10/12 md:w-3/12 shadow-md rounded-md self-center flex flex-col border-2 h-96">
        <div className="mt-6 rounded-lg border-2 bg-slate-300 w-5/12 self-center flex flex-row justify-center">
        <Link href={'/login'}>
        
          <p className="p-0.5 font-medium px-2 rounded-lg transition-all duration-150">
            Login
          </p>
          </Link>
          <p className="active p-0.5 font-medium px-2 rounded-lg transition-all duration-150">
            Signin
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
          <label htmlFor="name" className="px-6 font-medium mt-2 w-10/12">
            Name:
          </label>
          <input
          required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-10/12 bg-slate-200 border-2 h-10 self-center font-medium px-2"
          />
          <label htmlFor="email" className="px-6 font-medium mt-2 w-10/12">
            Email:
          </label>
          <input
          required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-10/12 bg-slate-200 border-2 h-10 self-center font-medium px-2"
          />
          <label htmlFor="password" className="px-6 font-medium mt-2 w-10/12">
            Password:
          </label>
          <input
          required
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-10/12 focus:ring-pink-300 from-fuchsia-300 bg-slate-200 border-2 h-10 self-center font-medium px-2"
          />
          <label htmlFor="role" className="px-6 font-medium mt-2 w-10/12">
            Role:
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-10/12 bg-slate-200 border-2 h-10 self-center font-medium px-2"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="librarian">Librarian</option>
          </select>
          <button
            type="submit"
            className="w-10/12 self-center bg-pink-300 p-2 mt-2 rounded-sm font-medium active:bg-pink-400 transition-colors duration-100"
          >
            Signup
          </button>
        </form>
        <div className="mt-2 self-center flex flex-row gap-1">
          already have an account?{" "}
          <p className="text-blue-500 active:text-blue-500 transition-all duration-100">
            <Link href={'/login'}>
              Login
            </Link>
          </p>{" "}
        </div>
      </div>
    </div>
  );
}

export default Signup;
