import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Signin() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col lg:flex-row justify-center items-center mt-10 lg:mt-[100px] w-full px-4'> 
        
        <div className='flex justify-center lg:w-[800px] w-full'>
          <img 
            className='object-cover w-full h-[300px] lg:h-[781px]' 
            src="../../public/signup-in/signin-up.png" 
            alt="Sign In" 
          />
        </div>

        <div className='flex flex-col items-center justify-center w-full max-w-md lg:max-w-[371px] mt-10 lg:mt-[130px] lg:ml-[130px]'>
          <p className='text-3xl lg:text-4xl font-semibold text-center'>Log in to exclusive</p>
          <p className='font-medium mt-3 text-center'>Enter your details below</p>
          
          <form className='mt-6 w-full'>
            <div className='flex flex-col gap-5'>
              <input 
                type='text' 
                placeholder='Email or Phone Number' 
                className='input input-bordered w-full h-[56px]' 
              />
              <input 
                type='password' 
                placeholder='Password' 
                className='input input-bordered w-full h-[56px]' 
              />
            </div>
          </form>

          <div className='flex flex-col items-center mt-6 w-full'>
            <button className='bg-red-500 text-white h-[56px] rounded-md w-full text-xl font-medium'>
              Log in
            </button>
            <div className='mt-4 hover:underline text-red-500 font-medium text-lg text-center'>
              <a href="">Forget Password?</a>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-[163px]'>
        <Footer />
      </div>
    </>
  );
}

export default Signin;
