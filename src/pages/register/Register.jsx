import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import SocialLogin from '../../components/socialLogin/SocialLogin';
import useAuth from '../../hooks/useAuth';
import "./Register.css"
const Register = () => {
  const {createUser} = useAuth();
  const navigate = useNavigate()
  // const [accepted, setAccepted] = useState(false);

  // const [error, setError] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.username.value; 
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await createUser(email, password);
      const createdUser = result.user;

      // Registration successful
      console.log(createdUser);

      // Redirect the user to the home page
      navigate('/');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };
  

  return (
    <div className="hero min-h-screen bg-[#111] opacity-60">
      <div className="hero hero-content lg:h-[600px] mx-auto lg:w-[1000px] flex-col lg:flex-row bg-[#111] shadow-2xl">
     <div className='md:flex flex-col justify-center items-center gap-7 w-full h-full hidden'>
     <img src="https://static.vecteezy.com/system/resources/previews/016/140/880/original/register-now-icon-in-comic-style-registration-cartoon-illustration-on-isolated-background-member-notification-splash-effect-sign-business-concept-vector.jpg" className="max-w-sm z-30" />
      <h3>Use Google to hasselFree LogIn</h3>
       <SocialLogin />
     </div>
       <div id='regAnimation' className='w-full'>
       <div className="p-6 w-full z-20">
         
         <h2 className="text-xl pt-10 md:text-2xl font-semibold mb-2 md:mb-4">Register</h2>
         <form onSubmit={handleRegister}>
           <div className="mb-4">
             <label
               htmlFor="username"
               className="block text-sm font-medium text-gray-300"
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
               className="block text-sm font-medium text-gray-300"
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
               className="block text-sm font-medium text-gray-300"
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
         <div className="flex flex-col justify-center items-center mx-auto gap-2 md:hidden">
           <h3>LogIn With Google</h3>
           <div className="text-center mx-auto -mt-8">
            
             <SocialLogin />
           </div>
          
         </div>

         <p className="text-sm text-gray-600 mt-2 pb-2">
           Already have an account?{' '}
           <Link to="/login" className="text-indigo-500 hover:underline">
             Login
           </Link>
         </p>
       </div>
       </div>
      </div>
    </div>
  );
};

export default Register;
