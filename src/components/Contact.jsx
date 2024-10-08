import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function Contact() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />

      <div className='flex flex-grow flex-col lg:flex-row items-center lg:items-start px-4'> 
        <div className='w-full lg:w-[340px] mt-10 lg:mt-[323px] flex justify-center lg:justify-start lg:ml-[135px]'>
          <div className='w-full lg:w-[270px] h-auto lg:h-[366px] p-5 lg:ml-[35px] lg:mt-[40px]'>
            <div className='flex items-center gap-5'>
              <img src='/contact/call.svg' alt='Call Icon' />
              <p className='text-lg font-semibold'>Call To Us</p>
            </div>
            <div className='font-medium mt-2'>
              <p>We are available 24/7, 7 days a week.</p>
              <p className='mt-2'>Phone: +91 8005006785</p>
            </div>
            <hr className='mt-6' />
            <div className='flex items-center gap-5 mt-6'>
              <img src='/contact/massage.svg' alt='Mail Icon' />
              <p className='text-lg font-semibold'>Write To Us</p>
            </div>
            <div className='font-medium mt-2'>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p className='mt-2'>Email: customer@exclusive.com</p>
              <p className='mt-2'>Email: support@exclusive.com</p>
            </div>
          </div>
        </div>

     
        <div className='w-full lg:w-[800px] mt-10 lg:mt-[323px] flex justify-center lg:ml-[50px]'>
          <div className='w-full lg:w-[727px] p-5 lg:mt-[40px] lg:ml-[31px]'>
            <div className='flex flex-col lg:flex-row justify-between gap-5'>
              <input
                type='text'
                placeholder='Name*'
                className='input font-medium input-accent w-full h-[56px]'
              />
              <input
                type='text'
                placeholder='Email*'
                className='input font-medium input-accent w-full h-[56px]'
                
              />
              <input
                type='text'
                placeholder='Phone*'
                className='input font-medium input-accent w-full h-[56px]' 
              />
            </div>

            <textarea
              className='input font-medium input-accent w-full h-[150px] lg:h-[207px] mt-5 lg:mt-10'
              placeholder='Your Message'
              name=''
              id=''
            ></textarea>

            <button className='bg-red-500 text-white text-xl font-semibold text-center mt-5 lg:ml-auto lg:mr-0 w-full lg:w-[215px] h-[56px] rounded-md'>
              Send Message
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
