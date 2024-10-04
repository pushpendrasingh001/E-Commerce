import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
function Signin() {
  return (
    <>
      <Navbar/>
   
    <div className='h-[781px] w-[1300px] flex mt-[100px]'>
       <div className='h-[781px] w-[800px]'>
        <img className='h-[781px] w-[800px]' src="../../public/signup-in/signin-up.png" alt="" />
       </div>
       <div className='h-[530px] w-[371px]  mt-[180px] ml-[130px]'>
        <p className='text-4xl font text-start'> Log in to exclusive</p>
        <p className='font-medium mt-3'>Enter your details below</p>
        <div>
       
       <form className='mt-6'>
        <div className='flex flex-col gap-5 ' >
  
       <input type="text" placeholder="Email or Phone Number" className="input input-bordered w-full" />
        <input type="text" placeholder="Password" className="input input-bordered w-full" />
        </div>
       </form>
        </div>
    
         <div className='flex mt-6'>
      <div>
      <button className='bg-red-500 text-white h-[56px] rounded-md  w-[143px] text-xl font-medium'> Log in</button>
      </div>
          <div className='ml-[70px] mt-[15px] hover:underline text-red-500 font-medium text-lg'>
          <a href=""> Forget Password ? </a> 
          </div>
       
         </div>
      
       </div>
    </div>
 
<div className='mt-[163px]'>
<Footer/>
</div>
    </>
  )
}

export default Signin
