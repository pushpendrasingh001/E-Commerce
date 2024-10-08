import React from 'react';

function HomeFeature() {
  return (
    <>
<div className='h-auto w-full lg:w-[90%] ml-[5%] shadow-lg'>
  <div className='flex justify-between m-5 flex-wrap'>
    <span className='flex flex-col gap-y-3'>
      <h2 className="text-red-600 font-bold text-lg">Featured  </h2>
      <h2 className="text-4xl font-bold text-gray-900"> New Arrival</h2>
    </span>
    <span className='flex  items-center space-x-4'>
      <button>
        <img src="../../public/leftarrow.svg" alt="Left arrow" />
      </button>
      <button>
        <img src="../../public/rightarrow.svg" alt="Right arrow" />
      </button>
    </span>
  </div>
</div>

<div class="container mx-auto grid grid-rows-4 grid-flow-col gap-4 h-[600px] w-full lg:w-[1300px] mt-10">
  <div class="row-span-4 col-span-2 bg-red-100 lg:ml-[30px]">
    <img src="../../public/featured/playstation.png" class="h-[511px] w-[450px] mt-[89px] ml-[29px]" />
  </div>
  <div class="row-span-2 col-span-2 bg-slate-200 lg:ml-[8px]">
    <img class="h-[286px] border-orange-950 border-spacing-5" src="../../public/featured/women.png" alt="Women" />
  </div>
  <div class="row-span-2 col-span-1 bg-green-100 lg:ml-[8px]">
    <img class="h-[222px]" src="../../public/featured/speaker.png" alt="Speaker" />
  </div>
  <div class="row-span-2 col-span-1 bg-yellow-100 lg:ml-[10px]">
    <img class="h-[222px]" src="../../public/featured/gucci.png" alt="Gucci" />
  </div>
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
    </>
  );
}

export default HomeFeature
