import React from 'react';

function HomeThis() {
  return (
    <>
      <div className='h-[518px]'>
      <div className='h-auto w-full lg:w-[90%] ml-[5%] shadow-lg'>
  <div className='flex justify-between m-5 flex-wrap'>
    <span className='flex flex-col gap-y-3'>
      <h2 className="text-red-600 font-bold text-lg">This Month </h2>
      <h2 className="text-4xl font-bold text-gray-900">Best selling Products</h2>
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

        <div className='w-full md:max-w-[1300px] mx-auto mt-[30px]'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="relative">
                <img src="../../public/categories/sweater.png" alt="Sweater" className="w-full h-32 object-top rounded" />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-40%</span>
              </div>
              <h2 className="text-lg font-semibold mt-2">HAVIT HV-G92 Gamepad</h2>
              <div className="flex justify-between items-center mt-1">
                <p className="text-red-600 text-xl font-bold">$120</p>
                <p className="line-through text-gray-500">$160</p>
              </div>
              <div className="flex mt-2 justify-between items-center">
                <span className="flex items-center text-yellow-500">★★★★★</span>
                <span className="text-gray-500 text-sm">(88)</span>
              </div>
            </div>

     
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="relative">
                <img src="../../public/categories/bag.png" alt="Keyboard" className="w-full h-32 object-top rounded" />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-35%</span>
              </div>
              <h2 className="text-lg font-semibold mt-2">AK-900 Wired Keyboard</h2>
              <div className="flex justify-between items-center mt-1">
                <p className="text-red-600 text-xl font-bold">$960</p>
                <p className="line-through text-gray-500">$1160</p>
              </div>
              <div className="flex mt-2 justify-between items-center">
                <span className="flex items-center text-yellow-500">★★★★★</span>
                <span className="text-gray-500 text-sm">(75)</span>
              </div>
            </div>

          
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="relative">
                <img src="../../public/categories/cpu.png" alt="Monitor" className="w-full h-32 object-top rounded" />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-30%</span>
              </div>
              <h2 className="text-lg font-semibold mt-2">IPS LCD Gaming Monitor</h2>
              <div className="flex justify-between items-center mt-1">
                <p className="text-red-600 text-xl font-bold">$370</p>
                <p className="line-through text-gray-500">$400</p>
              </div>
              <div className="flex mt-2 justify-between items-center">
                <span className="flex items-center text-yellow-500">★★★★★</span>
                <span className="text-gray-500 text-sm">(99)</span>
              </div>
            </div>

           
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="relative">
                <img src="../../public/categories/bookself.png" alt="Chair" className="w-full h-32 object-top rounded" />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-25%</span>
              </div>
              <h2 className="text-lg font-semibold mt-2">S-Series Comfort Chair</h2>
              <div className="flex justify-between items-center mt-1">
                <p className="text-red-600 text-xl font-bold">$375</p>
                <p className="line-through text-gray-500">$400</p>
              </div>
              <div className="flex mt-2 justify-between items-center">
                <span className="flex items-center text-yellow-500">★★★★★</span>
                <span className="text-gray-500 text-sm">(99)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeThis;
