import React from 'react';
import img from '../../../public/7676.jpg_wh300.jpg'
import { Link } from 'react-router-dom';
const Registration = () => {
    const handleGoogleSignIn = () => {
        // Handle Google Sign-In logic here
      };
    const handleGoogleGithub = () => {
        // Handle gitHub Sign-In logic here
      };
    
      const handleImageUpload = (event) => {
        const imageFile = event.target.files[0];
        // Handle image upload logic here
      };
    return (
        <div>
           <div className="hero  min-h-screen bg-base-200" style={{backgroundImage: 'url(https://img.lovepik.com/background/20211021/small/lovepik-fluid-gradient-quotient-background-image_400953976.jpg)'}}>
  <div className="hero-content lg:h-[600px] w-96 mx-auto lg:w-[1000px] flex-col lg:flex-row card card-body bg-white shadow-2xl">
    <img src={img} className=" w-full  rounded-lg  " />
    
    
    <div className="bg-white p-8 w-full">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" id="username" name="username" className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:ring text-white focus:ring-indigo-200" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200" required />
          </div>
          <div className="mb-4">
            <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700">Profile Image</label>
            <input type="file" accept="image/*" id="profileImage" name="profileImage" onChange={handleImageUpload} className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200" />
          </div>
          <div className="mb-6">
            <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-2 rounded-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 focus:outline-none focus:ring focus:ring-indigo-200">Register</button>
          </div>
        </form>
        <div className='flex mx-auto gap-2 '>
            <div className="text-center mx-auto">
          <button onClick={handleGoogleSignIn} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-md hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 focus:outline-none focus:ring focus:ring-red-200">Sign in with Google</button>
        </div>
        <div className="text-center mx-auto">
          <button onClick={handleGoogleGithub} className="bg-gradient-to-r from-purple-500 hover:to-pink-500 text-white p-2 rounded-md hover:bg-gradient-to-r hover:from-cyan-500 to-blue-500 focus:outline-none focus:ring focus:ring-red-200">Sign in with GitHub</button>
        </div>  
        </div>
      
        <p className="text-sm text-gray-600 mt-2">Already have an account? <Link to="/login" className="text-indigo-500 hover:underline">Login</Link></p>
      </div>

  </div>
</div> 
        </div>
    );
};

export default Registration;