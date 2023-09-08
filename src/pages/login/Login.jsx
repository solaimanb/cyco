import React, { useState } from 'react';
import { FaFulcrum } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/socialLogin/SocialLogin';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      const result = await signIn(email?.value, password?.value);
      const loggedUser = result?.user;
      console.log(loggedUser);

      // LOGIN SUCCESS NOTIFICATION:
      Swal.fire({
        text: 'Login successful!',
        icon: 'success',
        background: '#222',
      } );
      
      navigate('/', { replace: true });
    } catch (error) {
      console.error(error);
      setErrorMessage('Invalid email or password');
    }
  };

  // const handleResetPassword = (event) => {
  //         const email = (emailRef.current.value);
  //         if (!email){
  //           alert('please provide your email address first')
  //           return;
  //         }

  //         sendPasswordResetEmail(auth, email)
  //         .then(() => {
  //           alert('Please check your email')
  //         })
  //         .catch(error => {
  //           console.log(error);
  //           setErrorMessage(error.message)
  //         })
  // }

  return (
    <div className="flex justify-center items-center h-screen">
      <div id="loginAnimation">
        <div className="z-20">
          <div className="absolute top-0 left-0 animate-pulse">
            <FaFulcrum className="text-4xl text-cyred" />
          </div>
          <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
            Login
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-xs font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-xs font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-sm"
                required
              />
              {/* <label className="flex justify-end">
             <p className="text-sm pt-2 "> <button onClick={handleResetPassword}>Forgot password?</button> </p>
            </label> */}
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm mb-2">{errorMessage}</p>
            )}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full text-white p-2 rounded-sm border bg-red-950 bg-opacity-20 border-red-800 hover:bg-gradient-to-r hover:from-cyred hover:to-red-900 focus:outline-none"
              >
                Login
              </button>
            </div>
          </form>

          <div className="flex mx-auto gap-2 ">
            <div className="text-center mx-auto">
              <SocialLogin />
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-5 mb-6">
            Don't have an account?{' '}
            <Link to="/register" className="text-indigo-500 hover:underline">
              Register
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

export default Login;
