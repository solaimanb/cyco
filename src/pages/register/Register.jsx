import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../../components/socialLogin/SocialLogin';
import useAuth from '../../hooks/useAuth';
const Register = () => {
  const {createUser} = useAuth();
  // const [accepted, setAccepted] = useState(false);

  // const [error, setError] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    // const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

   console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero hero-content lg:h-[600px] w-96 mx-auto lg:w-[1000px] flex-col lg:flex-row card card-body bg-white shadow-2xl">
      <img src="https://static.vecteezy.com/system/resources/previews/016/140/880/original/register-now-icon-in-comic-style-registration-cartoon-illustration-on-isolated-background-member-notification-splash-effect-sign-business-concept-vector.jpg" className="max-w-sm z-30" />
       <SocialLogin />
        <div className="bg-white p-8 w-full">
         
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
                required
              />
            </div>
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
                className="mt-1 p-2 w-full border rounded-md focus:ring text-white focus:ring-indigo-200"
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
            </div>
            {/* <div className="mb-4">
              <label
                htmlFor="profileImage"
                className="block text-sm font-medium text-gray-700"
              >
                Profile Image
              </label>
              <input
                type="file"
                accept="image/*"
                id="profileImage"
                name="profileImage"
              
                className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
              />
            </div> */}
            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-2 rounded-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 focus:outline-none focus:ring focus:ring-indigo-200"
              >
                Register
              </button>
            </div>
          </form>
          <div className="flex mx-auto gap-2 ">
            <div className="text-center mx-auto">
             
              <SocialLogin />
            </div>
           
          </div>

          <p className="text-sm text-gray-600 mt-2">
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
