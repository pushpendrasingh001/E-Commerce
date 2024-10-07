import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
function Contact() {
  return (
    <div className='flex flex-col min-h-screen'>
  <Navbar/>

  
    <div className='flex flex-grow '>
<div className='w-[340px] h-[457px] mt-[323px] flex ml-[135px] '>
  <div className='w-[270px] h-[366px] ml-[35px] mt-[40px] '>
    <div className=' h-[40px]  flex gap-5 '>
    <img src="/contact/call.svg" alt="" />
    <p className='mt-[8px] text-lg font-semibold'>Call To Us</p>
    </div>
<div className='font-medium mt-[10px] '>
<p > We are available 24/7,7 days a week.</p>

<p className='mt-2'>Phone:+91 8005006785</p>
</div>
<hr className='mt-[30px]' />
<div className=' h-[40px] mt-[30px] flex gap-5 '>
<img src="/contact/massage.svg" alt="" />
    <p className='mt-[8px] text-lg font-semibold'>Write To Us</p>
    </div>
<div className='font-medium mt-[10px] '>
<p > Fill out our form and we will cotact you within 24 hours.</p>

<p className='mt-2'>Emails:customer@exclusive.com</p>
<p className='mt-2'>Emails:support@exclusive.com</p>
</div>
  </div>
</div>
<div className=' w-[800px] flex h-[457px] mt-[323px] ml-[505px]'>
<div className=' w-[727px] h-[377px] mt-[40px] ml-[31px] '>
<div className=' flex justify-evenly'>
<input
  type="text"
  placeholder="Name*"
  className="input  font-medium input-accent w-[235px]" /><input
  type="text"
  placeholder="Email*"
  className="input  input-accent font-medium  w-[235px]" /><input
  type="text"
  placeholder="Phone*"
  className="input  input-accent font-medium w-[235px]" />
</div>
<textarea className=' w-[710px] ml-[8px] h-[207px] mt-10 input font-medium input-accent ' placeholder='Your Massage' name="" id=""></textarea>
<button className='bg-red-500 text-white text-xl font-semibold text-center mt-5 ml-[70%] w-[215px] h-[56px] rounded-md '> Send Massage</button>
</div>

</div>
    </div>
    <Footer/>
    </div>
  )
}

export default Contact
// import React from 'react'
// import Footer from './Footer'
// import Navbar from './Navbar'

// function Contact() {
//   return (
//     <div className='flex flex-col min-h-screen'>
//       <Navbar/>
      
//       <div className='flex flex-grow'>
//         <div className='w-[340px] h-[457px] mt-[323px] flex ml-[135px]'>
//           <div className='w-[270px] h-[366px] ml-[35px] mt-[40px]'>
//             <div className='h-[40px] flex gap-5'>
//               <img src="public/contact/call.svg" alt="Call Icon" />
//               <p className='mt-[8px] text-lg font-semibold'>Call To Us</p>
//             </div>
//             <div className='font-medium mt-[10px]'>
//               <p>We are available 24/7, 7 days a week.</p>
//               <p className='mt-2'>Phone: +91 8005006785</p>
//             </div>
//             <hr className='mt-[30px]' />
//             <div className='h-[40px] mt-[30px] flex gap-5'>
//               <img src="public/contact/massage.svg" alt="Message Icon" />
//               <p className='mt-[8px] text-lg font-semibold'>Write To Us</p>
//             </div>
//             <div className='font-medium mt-[10px]'>
//               <p>Fill out our form and we will contact you within 24 hours.</p>
//               <p className='mt-2'>Email: customer@exclusive.com</p>
//               <p className='mt-2'>Email: support@exclusive.com</p>
//             </div>
//           </div>
//         </div>
        
//         <div className='w-[800px] flex h-[457px] mt-[323px] ml-[505px]'>
//           <div className='w-[727px] h-[377px] mt-[40px] ml-[31px]'>
//             <div className='flex justify-evenly'>
//               <input
//                 type="text"
//                 placeholder="Name*"
//                 className="input font-medium input-accent w-[235px]" />
//               <input
//                 type="text"
//                 placeholder="Email*"
//                 className="input input-accent font-medium w-[235px]" />
//               <input
//                 type="text"
//                 placeholder="Phone*"
//                 className="input input-accent font-medium w-[235px]" />
//             </div>
//             <textarea className='w-[710px] ml-[8px] h-[207px] mt-10 input font-medium input-accent' placeholder='Your Message' name="" id=""></textarea>
//             <button className='bg-red-500 text-white text-xl font-semibold text-center mt-5 ml-[70%] w-[215px] h-[56px] rounded-md'>Send Message</button>
//           </div>
//         </div>
//       </div>

//       <Footer/>
//     </div>
//   )
// }

// export default Contact
