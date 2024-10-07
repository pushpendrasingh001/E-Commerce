import React from 'react'
import Navbar from './Navbar'
import AboutCorousal from './AboutCorousal'
import Footer from './Footer'
function About() {
  return (
   <>
   <Navbar/>
   <div className='w-full flex '>
         <div className=' w-[525px] h-[336px] mt-[170px] ml-[150px]'>
          <div className='text-4xl font-bold'>
            Our Story
          </div>
          <div className='mt-5 break-keep font-medium '>
            Launched in 2015,Exclusive is South Asia's premier online shopping marketplace with an active presence India. Supported by wide range of tailored marketing,data and serrvice solution,Exclusive has has 10,500 sallers and 300 brands and serve 3 million customers across the region         </div>
            <div className='mt-4 font-medium'>
              Exclusive has more than 1 Million products availableto offer, growing at a very fast.Exclusive offers a diverse assotment in categories ranging from consumer.
            </div>
         </div>
 <div><img className='w-[750px] h-[600px] mt-[50px] ml-[20%]   ' src="/public/about/hero.svg" alt="" /></div>

    </div>
    <div className='grid grid-flow-col w-[1150px] mt-10 text-center ml-[277px] h-[230px] '>
  <div className='w-[270px]  flex justify-center items-center'>
    <div className='h-[160px] w-[240px] flex flex-col justify-center items-center'>
      <img className='h-[80px] m-5' src="../../public/featured/delivery.png" alt="Delivery Icon" />
      <p className='font-bold text-2xl'>10K</p>
      <p className='font-medium'>Free delivery for all over $140</p>
    </div>
  </div>
  
  <div className='w-[270px]  flex justify-center items-center'>
    <div className='h-[160px] w-[240px] flex flex-col justify-center items-center'>
      <img className='h-[80px] m-5' src="../../public/featured/delivery.png" alt="Delivery Icon" />
      <p className='font-bold text-2xl'>25.5K</p>
      <p className='font-medium'>Free delivery for all over $140</p>
    </div>
  </div>
  
  <div className='w-[270px]  flex justify-center items-center'>
    <div className='h-[160px] w-[240px] flex flex-col justify-center items-center'>
      <img className='h-[80px] m-5' src="../../public/featured/delivery.png" alt="Delivery Icon" />
      <p className='font-bold text-2xl'>33K</p>
      <p className='font-medium'>Free delivery for all over $140</p>
    </div>
  </div>
  
  <div className='w-[270px] flex justify-center items-center'>
    <div className='h-[160px] w-[240px] flex flex-col justify-center items-center'>
      <img className='h-[80px] m-5' src="../../public/featured/delivery.png" alt="Delivery Icon" />
      <p className='font-bold text-2xl'>45K</p>
      <p className='font-medium'>Free delivery for all over $140</p>
    </div>
  </div>
</div>

    <AboutCorousal/>

   
    <div>
    <div className='h-[165px] w-[940px]  ml-[25%] m-[150px]'> 
<div className=' grid grid-col-3 gap-4 grid-flow-col ml-[40px]'>
<div className=' h-[160px] w-[240px]'>
<img className='h-[80px] ml-[30%] m-5'  src="../../public/featured/delivery.png" alt="" />
<p className=' font-extrabold text-white text-lg'>FREE AND FAST DELIVERY</p>
<p className='font-medium '> Free delivery for all over $140</p>
</div>
<div className='h-[160px] w-[240px]'>
<img className='h-[80px] ml-[30%] m-5'  src="../../public/featured/support.png" alt="" />
<p className=' font-extrabold text-lg'>24/7 CUSTOMER SERVICE</p>
<p className='font-medium '> Friendly 24/7 Customer Service </p>
</div>
<div className=' h-[160px] w-[240px]'>
<img className='h-[80px] ml-[30%] m-5' src="../../public/featured/moneyback.png" alt="" />
<p className=' font-extrabold text-lg'>MONEY BACK GUARANTEE</p>
<p className='font-font-medium '> we return money with in 30 days</p>
</div>


</div>
</div>
    </div>
    <Footer/>
    </>
  )
}

export default About
