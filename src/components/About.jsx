
import React from 'react'
import Navbar from './Navbar'
import AboutCorousal from './AboutCorousal'
import Footer from './Footer'

function About() {
  return (
    <>
      <Navbar />

     
      <div className='w-full flex flex-col lg:flex-row items-center lg:justify-between px-5 lg:px-24'>
       
        <div className='w-full lg:w-1/2 mt-10 lg:mt-20'>
          <h2 className='text-3xl lg:text-5xl font-bold mb-4'>
            Our Story
          </h2>
          <p className='mt-5 font-medium text-justify'>
            Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in India. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands, serving 3 million customers across the region.
          </p>
          <p className='mt-4 font-medium text-justify'>
            Exclusive has more than 1 million products available to offer and is growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer products and more.
          </p>
        </div>

       
        <div className='w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center'>
          <img className='w-full max-w-[600px] lg:max-w-[750px] h-auto' src="/public/about/hero.svg" alt="About Us" />
        </div>
      </div>

     
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-[1200px] mt-16 text-center mx-auto px-4'>
        <div className='flex justify-center items-center'>
          <div className='h-[160px] w-[180px] lg:w-[240px] flex flex-col justify-center items-center'>
            <img className='h-[60px] lg:h-[80px] m-5' src="../../public/featured/delivery.png" alt="Delivery Icon" />
            <p className='font-bold text-xl lg:text-2xl'>10K</p>
            <p className='font-medium text-sm lg:text-base'>Free delivery for all orders over $140</p>
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <div className='h-[160px] w-[180px] lg:w-[240px] flex flex-col justify-center items-center'>
            <img className='h-[60px] lg:h-[80px] m-5' src="../../public/featured/delivery.png" alt="Delivery Icon" />
            <p className='font-bold text-xl lg:text-2xl'>25.5K</p>
            <p className='font-medium text-sm lg:text-base'>Orders completed successfully</p>
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <div className='h-[160px] w-[180px] lg:w-[240px] flex flex-col justify-center items-center'>
            <img className='h-[60px] lg:h-[80px] m-5' src="../../public/featured/delivery.png" alt="Delivery Icon" />
            <p className='font-bold text-xl lg:text-2xl'>33K</p>
            <p className='font-medium text-sm lg:text-base'>Active users every day</p>
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <div className='h-[160px] w-[180px] lg:w-[240px] flex flex-col justify-center items-center'>
            <img className='h-[60px] lg:h-[80px] m-5' src="../../public/featured/delivery.png" alt="Delivery Icon" />
            <p className='font-bold text-xl lg:text-2xl'>45K</p>
            <p className='font-medium text-sm lg:text-base'>Satisfied customers worldwide</p>
          </div>
        </div>
      </div>

    
        <div className='m-16'>
          <AboutCorousal />
        </div>
  

     
      <div className='mt-16 mb-16 w-full max-w-[1200px] mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
          <div className='h-[160px] w-[240px] mx-auto'>
            <img className='h-[80px] mx-auto m-5' src="../../public/featured/delivery.png" alt="Free Delivery" />
            <p className='font-extrabold text-lg'>FREE AND FAST DELIVERY</p>
            <p className='font-medium text-sm lg:text-base'>Free delivery for all orders over $140</p>
          </div>

          <div className='h-[160px] w-[240px] mx-auto'>
            <img className='h-[80px] mx-auto m-5' src="../../public/featured/support.png" alt="Customer Support" />
            <p className='font-extrabold text-lg'>24/7 CUSTOMER SERVICE</p>
            <p className='font-medium text-sm lg:text-base'>Friendly 24/7 Customer Service</p>
          </div>

          <div className='h-[160px] w-[240px] mx-auto'>
            <img className='h-[80px] mx-auto m-5' src="../../public/featured/moneyback.png" alt="Money Back Guarantee" />
            <p className='font-extrabold text-lg'>MONEY BACK GUARANTEE</p>
            <p className='font-medium text-sm lg:text-base'>We return money within 30 days</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default About
