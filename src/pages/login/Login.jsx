import { getAuth } from "@firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/socialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";

const auth = getAuth();
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
        setErrorMessage("Invalid email or password");
      });
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
    <div className="flex justify-center items-center h-screen hero">
      <div className="p-8 bg-zinc-900 rounded-sm shadow-lg w-96 h-auto">
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
              // ref={emailRef}
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
            {/* <label className="flex justify-end">
             <p className="text-sm pt-2 "> <button onClick={handleResetPassword}>Forgot password?</button> </p>
            </label> */}
          </div>
          {/* {errorMessage && (
            <p className="text-red-500 text-sm mb-2">{errorMessage}</p>
          )} */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full text-white p-2 rounded-md hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 focus:outline-none focus:ring focus:ring-indigo-200"
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
