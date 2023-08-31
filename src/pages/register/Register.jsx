import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FaFulcrum } from 'react-icons/fa';
import SocialLogin from '../../components/socialLogin/SocialLogin';
import useAuth from '../../hooks/useAuth';
import './Register.css';
const Register = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();
  // const [accepted, setAccepted] = useState(false);

  // const [error, setError] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = "user";
  
    try {
      // Create the user locally using the createUser function
      const result = await createUser(email, password);
      const createdUser = result.user;
  
      // Now send the user registration data to your backend API
      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          role,
          email,
          password,
        }),
      });
  
      if (response.ok) {
        // Registration successful
        console.log('User registered successfully');
        navigate('/');
      } else {
        // Handle registration error
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  };
  

return (
  <div className="hero min-h-screen mx-auto shadow-2xl">
    <div id="regAnimation" className="">
      <div className="w-ful z-20">
        <div className="absolute top-0 left-0 animate-pulse">
          <FaFulcrum className="text-4xl text-cyred" />
        </div>
        <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
          Register
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-xs font-medium text-gray-300"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded-sm focus:ring"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-xs font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-sm focus:ring text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-xs font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-sm focus:ring"
              required
            />
          </div>
          {/* <div className="mb-4">
             <label
               htmlFor="profileImage"
               className="block text-xs font-medium text-gray-700"
             >
               Profile Image
             </label>
             <input
               type="file"
               accept="image/*"
               id="profileImage"
               name="profileImage"
             
               className="mt-1 p-2 w-full border rounded-sm focus:ring"
             />
           </div> */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full text-white p-2 rounded-sm border bg-red-950 bg-opacity-20 border-red-800 hover:bg-gradient-to-r hover:from-cyred hover:to-red-900 focus:outline-none"
            >
              Register
            </button>
          </div>
        </form>
        <div className="flex flex-col justify-center items-center mx-auto gap-2 md:hidden">
          <h3>LogIn With Google</h3>
          <div className="text-center mx-auto -mt-8">
            <SocialLogin />
          </div>
        </div>

        <p className="text-xs text-gray-600 mt-2 pb-2">
          Already have an account?{' '}
          <Link to="/login" className="text-indigo-500 hover:underline">
            Login
          </Link>
        </p>
        <div className="absolute bottom-0 right-0 animate-pulse">
          <FaFulcrum className="text-4xl text-cyred" />
        </div>
      </div>
    </div>
  </div>
);
};

export default Register;
