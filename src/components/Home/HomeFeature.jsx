import React from 'react'

function HomeFeature() {
  return (
    <>
      <div className='h-[760px]  w-[1300px]  ml-[480px] '>
<span>
  <h2 className="text-lg font-bold text-red-500">Featured </h2>
  <h2 className="text-4xl font-bold text-gray-900">New Arrival</h2>
</span>


<div class="grid grid-rows-4 grid-flow-col gap-4 h-[600px] w-[1300px] mt-10">
  <div class="row-span-4 col-span-2 bg-red-100 ml-[30px]">
    <img src="../../public/featured/playstation.png" className='h-[511px] w-[450px] mt-[89px] ml-[29px]' />
  </div>
  <div class="row-span-2 col-span-2 bg-slate-200 ml-[35px]">
    <img className='h-[286px] border-orange-950 border-spacing-5' src="../../public/featured/women.png" alt="" />
  </div>
  <div class="row-span-2 col-span-1 bg-green-100 ml-[10px]">
    <img className='h-[222px]' src="../../public/featured/speaker.png" alt="" />
  </div>
  <div class="row-span-2 col-span-1 bg-yellow-100 ml-[10px]">
    <img className='h-[222px]' src="../../public/featured/gucci.png" alt="" />
  </div>
</div>
</div>

<div className='h-[165px] w-[940px]  ml-[30%] m-[150px]'> 
<div className=' grid grid-col-3 gap-4 grid-flow-col ml-[40px]'>
<div className=' h-[160px] w-[240px]'>
<img className='h-[80px] ml-[30%] m-5'  src="../../public/featured/delivery.png" alt="" />
<p className=' font-extrabold text-lg'>FREE AND FAST DELIVERY</p>
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
    </>
  )
}

export default HomeFeature
