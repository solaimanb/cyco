import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFulcrum } from "react-icons/fa";
import axios from "axios";
import SocialLogin from "../../components/socialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import "./Register.css";
import { useForm } from "react-hook-form";

const Register = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (formData) => {
    const { username, email, password } = formData;
    const role = "user";
    console.log(formData);
    if (password !== confirmPassword) {
      return;
    }

    try {
      const result = await createUser(email, password);
      const createdUser = result.user;

      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/register`, {
        username,
        role,
        email,
        password,
      });
      console.log(response);
      if (response.status === 201) {
        console.log("User registered successfully");
        navigate("/");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Registration failed", error);
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
          <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("username", { required: true })}
                className="mt-1 p-2 w-full border rounded-sm focus:ring"
                required
              />
              {errors.username && (
                <p className="text-red-600">Username is required</p>
              )}
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
                {...register("email", { required: true })}
                className="mt-1 p-2 w-full border rounded-sm focus:ring text-white"
                required
              />
              {errors.email && (
                <p className="text-red-600">Email is required</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-xs font-medium text-gray-300"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  className="mt-1 p-2 w-full border rounded-sm focus:ring pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-600">
                  Password must have one uppercase letter, one lowercase letter,
                  one number, and one special character.
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-xs font-medium text-gray-300"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => value === password,
                  })}
                  className="mt-1 p-2 w-full border rounded-sm focus:ring pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-600">Passwords do not match</p>
              )}
            </div>
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
            Already have an account?{" "}
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
