import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaFulcrum } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { saveUser } from '../../api/saveUser';
import SocialLogin from '../../components/socialLogin/SocialLogin';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
  const { createUser, updateUserProfile, loading, setLoading } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    const { email, password, image, name } = data;
    const formData = new FormData();
    formData.append('image', image[0]);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const imageUrl = data.data.display_url;
        setLoading(true);
        createUser(email, password)
          .then((result) => {
            console.log(result.user);
            reset();
            updateUserProfile(name, imageUrl)
              .then(() => {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title:
                    'Congratulations, You Have Successfully registered to CYCO',
                  showConfirmButton: false,
                  timer: 1500,
                });
                saveUser(result.user);
                setLoading(false);
                navigate(from, { replace: true });
              })
              .catch((error) => {
                console.log(error.message);
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: error.message,
                });
                setLoading(false);
              });
          })
          .catch((error) => {
            console.log(error.message);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.message,
            });
            setLoading(false);
          });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        });
        setLoading(false);
      });
  };

  return (
    <div className="py-12 2xl:py-16 h-full flex justify-center items-center shadow-xl">
      <div id="regAnimation" className="">
        <div className="w-full z-20 p-8">
          <div className="absolute top-0 left-0 animate-pulse">
            <FaFulcrum className="text-4xl text-cyred" />
          </div>
          <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
            Register
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-xs font-medium text-gray-300"
              >
                Username
              </label>
              <input
                type="text"
                id="name"
                name="name"
                {...register('name', { required: true })}
                className="mt-1 p-2 w-full border rounded-sm focus:ring"
                required
              />
              {errors.name && (
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
                {...register('email', { required: true })}
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
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  {...register('password', {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    // pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  className="mt-1 p-2 w-full border rounded-sm focus:ring pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-2 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <span>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
                </button>
              </div>
              {errors.password && (
                <p className="text-red-600">
                  Password must be at least 6 characters long
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
                  type={showPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  {...register('confirmPassword', {
                    required: true,
                    validate: (value) => value === password,
                  })}
                  className="mt-1 p-2 w-full border rounded-sm focus:ring pr-12"
                  required
                />

                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-2 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <span>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-600">Passwords do not match</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-xs font-medium pb-2 text-gray-300"
              >
                Photo URL:
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                {...register('image', {
                  required: true,
                })}
                className="hidden"
              />
              <label
                htmlFor="image"
                className="p-2 w-full border rounded-sm bg-indigo-500 pr-12 cursor-pointer text-sm"
              >
                Select a file
              </label>
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full text-white p-2 rounded-sm border bg-red-950 bg-opacity-20 border-red-800 hover:bg-gradient-to-r hover:from-cyred hover:to-red-900 focus:outline-none"
              >
                {loading ? 'Loading...' : 'Register'}
              </button>
            </div>
          </form>
          <div className="flex flex-col justify-center items-center mx-auto gap-2">
            <h3 className="divider text-xs">Sign up with</h3>
            <div>
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

// const onSubmit = async (formData) => {
//   const { username, email, password } = formData;
//   const role = 'user';
//   console.log(formData);
//   if (password !== confirmPassword) {
//     return;
//   }

//   try {
//     const result = await createUser(email, password);
//     const createdUser = result.user;

//     const response = await axios.post(
//       `${import.meta.env.VITE_SERVER_URL}/register`,
//       {
//         username,
//         role,
//         email,
//         password,
//       }
//     );
//     console.log(response);
//     if (response.status === 201) {
//       console.log('User registered successfully');
//       navigate('/');
//     } else {
//       console.error('Registration failed');
//     }
//   } catch (error) {
//     console.error('Registration failed', error);
//   }
// };
