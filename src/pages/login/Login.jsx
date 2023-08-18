import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../components/socialLogin/SocialLogin';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate('/', { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-[#111] opacity-80 flex justify-center items-center h-screen hero">
      <div className="p-8 rounded shadow-lg w-96 h-auto">
        <h2 className="text-2xl font-semibold mb-4 ">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
              required
            />
            <label className="flex justify-end">
              <a className="link link-primary text-sm">Forgot password</a>
            </label>
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-md hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 focus:outline-none focus:ring focus:ring-indigo-200"
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
        <p className="text-sm text-gray-600 mt-5">
          Don't have an account?{' '}
          <Link to="/register" className="text-indigo-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
