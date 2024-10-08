import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Signup() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col lg:flex-row justify-center items-center mt-10 lg:mt-[100px] w-full'>
    
        <div className='flex justify-center lg:w-[800px] w-full'>
          <img className='object-cover w-full h-[781px] lg:h-auto' src="../../public/signup-in/signin-up.png" alt="Sign Up" />
        </div>

    
        <div className='flex flex-col items-center justify-center w-full max-w-md lg:max-w-[371px] mt-10 lg:mt-[130px] lg:ml-[130px]'>
          <p className='text-4xl font-semibold text-center'>Create an Account</p>
          <p className='font-medium mt-3 text-center'>Enter your details below</p>
          <div className='w-full'>
            <form className='mt-6'>
              <div className='flex flex-col gap-5'>
                <input
                  type='text'
                  placeholder='Name'
                  className='input input-bordered w-full' 
                />
                <input
                  type='text'
                  placeholder='Email or Phone Number'
                  className='input input-bordered w-full' 
                />
                <input
                  type='password' 
                  placeholder='Password'
                  className='input input-bordered w-full' 
                />
              </div>
            </form>
          </div>

          <div className='flex flex-col gap-[16px] mt-6 w-full'>
            <button className='bg-red-500 text-white h-[56px] rounded-md w-full text-xl font-medium'>
              Create Account
            </button>
            <div className='w-full h-[56px] rounded-md border-2 border-black flex items-center justify-center'>
              <div className='h-[24px] flex w-full gap-5 justify-center'>
                <img className="h-[24px]" src="../../public/signup-in/google.png" alt="Google Logo" />
                <p className='font-medium text-lg'>Sign up with Google</p>
              </div>
            </div>
            <p className='text-center'>
              Already have an account? <a className='text-blue-600 hover:underline' href="">Log in</a>
            </p>
          </div>
        </div>
      </div>

      <div className='mt-[163px]'>
        <Footer />
      </div>
    </>
  );
}

export default Signup;
