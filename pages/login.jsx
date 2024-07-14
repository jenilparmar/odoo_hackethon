import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch('/api/getuser', {
          method: 'GET',
        });
        const res = await data.json();
        setUsers(res);
        console.log(res);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    const user = users.find(user => user.email === formData.email && user.password === formData.password);
    
    if (user) {
      router.push('/bookfeed');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="w-10/12 md:w-3/12 shadow-md rounded-md self-center flex flex-col border-2 h-96">
        <div className="mt-6 rounded-lg border-2 bg-slate-300 w-5/12 self-center flex flex-row justify-center">
          <p className="active p-0.5 font-medium px-2 rounded-lg transition-colors duration-150">
            Login
          </p>
          <Link href="/">
            <p className="p-0.5 font-medium px-2 rounded-lg transition-colors duration-150 cursor-pointer">
              Signup
            </p>
          </Link>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col  w-full">
          <label htmlFor="email" className="px-6 font-medium mt-2">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-10/12 bg-slate-200 border-2 h-10 self-center font-medium px-2"
          />
          <label htmlFor="password" className="px-6 font-medium mt-2">
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-10/12 focus:ring-pink-300 from-fuchsia-300 bg-slate-200 border-2 h-10 self-center font-medium px-2"
          />
          <button
            type="submit"
            className="w-10/12 self-center bg-pink-300 p-2 mt-4 rounded-sm font-medium active:bg-pink-400 transition-colors duration-100"
          >
            Login
          </button>
        </form>
        <div className="mt-2 self-center flex flex-row gap-1">
          Don't have an account?{" "}
          <p className="text-blue-500 active:text-blue-500 transition-all duration-100">
            <Link href="/">
              Signup
            </Link>
          </p>{" "}
        </div>
      </div>
    </div>
  );
}

export default Login;
