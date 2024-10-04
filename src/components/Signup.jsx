import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
function Signup() {
  return (
    <>
      <Navbar/>
   
    <div className='h-[781px] w-[1300px] flex mt-[100px]'>
       <div className='h-[781px] w-[800px]'>
        <img className='h-[781px] w-[800px]' src="../../public/signup-in/signin-up.png" alt="" />
       </div>
       <div className='h-[530px] w-[371px]  mt-[130px] ml-[130px]'>
        <p className='text-4xl font text-start'> Create an Account</p>
        <p className='font-medium mt-3'>Enter your details below</p>
        <div>
       
       <form className='mt-6'>
        <div className='flex flex-col gap-5 ' >
     
        <input type="text" placeholder="Name" className="input input-bordered w-full " />
       <input type="text" placeholder="Email or Phone Number" className="input input-bordered w-full" />
        <input type="text" placeholder="Password" className="input input-bordered w-full" />
        </div>
       </form>
        </div>
        <div className=' h-[188px] flex flex-col gap-[16px] mt-6'>
        <button className='bg-red-500 text-white h-[56px] rounded-md  w-[371px] text-xl font-medium'> Create Account</button>
        <div className=' w-[371px] h-[56px]  rounded-md border-2 border-black '>
        <div className=' h-[24px] flex w-[250px] m-[15px] ml-[20%] gap-5'>
        <img className="h-[24px]" src="../../public/signup-in/google.png" alt="" />
        <p className='font-medium text-lg'>Sign up with Google</p>
        </div> 
        </div>
        <p className='text-center' >  Already have a account ? <a className='text-blue-600 hover:underline' href=""> Log in</a> </p>
        </div>
       </div>
    </div>
 
<div className='mt-[163px]'>
<Footer/>
</div>
    </>
  )
}

export default Signup
