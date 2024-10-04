import React from 'react'

function HomeProduct() {
  return (
    <div >
      <div className=' h-[1016px] mt-[100px] '>  
      <div className='flex justify-around'>

<span className='flex flex-col gap-y-3'>
     <h2 className="text-red-600 font-bold text-lg">Our Products</h2>
     <h2 className="text-4xl font-bold text-gray-900">Explore Our Products</h2>
  </span>

<span>
<div className="flex space-x-4 justify-items-end">
   <button>
    <img src="../../public/leftarrow.svg" alt="" />
   </button>
   <button>
   <img src="../../public/rightarrow.svg" alt="" />
   </button>
    </div>
</span>

</div>
<div className='w-[1300px]  ml-[480px] mt-[100px]'>

<div className="grid grid-cols-4 gap-6">
         
         <div className="bg-white p-4 rounded-lg shadow-md">
             <div className="relative">
                 <img src="../../public/product/gamepad.svg" alt="Gamepad" className="w-full h-32 object-top rounded"/>
                 <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-40%</span>
             </div>
             <h2 className="text-lg font-semibold mt-2">HAVIT HV-G92 Gamepad</h2>
             <div className="flex justify-between items-center mt-1">
                 <p className="text-red-600 text-xl font-bold">$120</p>
                 <p className="line-through text-gray-500">$160</p>
             </div>
             <div className="flex mt-2 justify-between items-center">
                 <span className="flex items-center text-yellow-500">
                 ★★★★★
                 </span>
                 <span className="text-gray-500 text-sm">(88)</span>
             </div>
         </div>

    
         <div className="bg-white p-4 rounded-lg shadow-md">
             <div className="relative">
                 <img src="../../public/product/keybord.svg" alt="Keyboard" className="w-full h-32 object-top rounded"/>
                 <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-35%</span> 
             </div>
             <h2 className="text-lg font-semibold mt-2">AK-900 Wired Keyboard</h2>
             <div className="flex justify-between items-center mt-1">
                 <p className="text-red-600 text-xl font-bold">$960</p>
                 <p className="line-through text-gray-500">$1160</p>
             </div>
             <div className="flex mt-2 justify-between items-center">
                 <span className="flex items-center text-yellow-500"> ★★★★★
                   
                 </span>
                 <span className="text-gray-500 text-sm">(75)</span>
             </div>
             {/* <button className="w-[90px] mt-4 py-2  bg-black text-white rounded">Add To Cart</button>
             <button className="w-[50px] mt-4 py-2 flex flex-row justify-evenly bg-black text-white rounded">Buy  </button> */}
         </div>


         <div className="bg-white p-4 rounded-lg shadow-md">
             <div className="relative">
                 <img src="../../public/product/desktop.svg
                 " alt="Monitor" className="w-full h-32 object-top rounded"/>
                 <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-30%</span>
             </div>
             <h2 className="text-lg font-semibold mt-2">IPS LCD Gaming Monitor</h2>
             <div className="flex justify-between items-center mt-1">
                 <p className="text-red-600 text-xl font-bold">$370</p>
                 <p className="line-through text-gray-500">$400</p>
             </div>
             <div className="flex mt-2 justify-between items-center">
                 <span className="flex items-center text-yellow-500">
                     ★★★★★
                 </span>
                 <span className="text-gray-500 text-sm">(99)</span>
             </div>
         </div>

         
         <div className="bg-white p-4 rounded-lg shadow-md">
             <div className="relative">
                 <img src="../../public/product/chair.svg" alt="Chair" className="w-full h-32 object-top rounded"/>
                 <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-25%</span>
             </div>
             <h2 className="text-lg font-semibold mt-2">S-Series Comfort Chair</h2>
             <div className="flex justify-between items-center mt-1">
                 <p className="text-red-600 text-xl font-bold">$375</p>
                 <p className="line-through text-gray-500">$400</p>
             </div>
             <div className="flex mt-2 justify-between items-center">
                 <span className="flex items-center text-yellow-500">
                     ★★★★★
                 </span>
                 <span className="text-gray-500 text-sm">(99)</span>
             </div>
         </div>
     </div>

     <div className="grid grid-cols-4 gap-6 mt-[20px]">
         
         <div className="bg-white p-4 rounded-lg shadow-md">
             <div className="relative">
                 <img src="../../public/product/gamepad.svg" alt="Gamepad" className="w-full h-32 object-top rounded"/>
                 <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-40%</span>
             </div>
             <h2 className="text-lg font-semibold mt-2">HAVIT HV-G92 Gamepad</h2>
             <div className="flex justify-between items-center mt-1">
                 <p className="text-red-600 text-xl font-bold">$120</p>
                 <p className="line-through text-gray-500">$160</p>
             </div>
             <div className="flex mt-2 justify-between items-center">
                 <span className="flex items-center text-yellow-500">
                 ★★★★★
                 </span>
                 <span className="text-gray-500 text-sm">(88)</span>
             </div>
         </div>

    
         <div className="bg-white p-4 rounded-lg shadow-md">
             <div className="relative">
                 <img src="../../public/product/keybord.svg" alt="Keyboard" className="w-full h-32 object-top rounded"/>
                 <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-35%</span> 
             </div>
             <h2 className="text-lg font-semibold mt-2">AK-900 Wired Keyboard</h2>
             <div className="flex justify-between items-center mt-1">
                 <p className="text-red-600 text-xl font-bold">$960</p>
                 <p className="line-through text-gray-500">$1160</p>
             </div>
             <div className="flex mt-2 justify-between items-center">
                 <span className="flex items-center text-yellow-500"> ★★★★★
                   
                 </span>
                 <span className="text-gray-500 text-sm">(75)</span>
             </div>
             {/* <button className="w-[90px] mt-4 py-2  bg-black text-white rounded">Add To Cart</button>
             <button className="w-[50px] mt-4 py-2 flex flex-row justify-evenly bg-black text-white rounded">Buy  </button> */}
         </div>


         <div className="bg-white p-4 rounded-lg shadow-md">
             <div className="relative">
                 <img src="../../public/product/desktop.svg
                 " alt="Monitor" className="w-full h-32 object-top rounded"/>
                 <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-30%</span>
             </div>
             <h2 className="text-lg font-semibold mt-2">IPS LCD Gaming Monitor</h2>
             <div className="flex justify-between items-center mt-1">
                 <p className="text-red-600 text-xl font-bold">$370</p>
                 <p className="line-through text-gray-500">$400</p>
             </div>
             <div className="flex mt-2 justify-between items-center">
                 <span className="flex items-center text-yellow-500">
                     ★★★★★
                 </span>
                 <span className="text-gray-500 text-sm">(99)</span>
             </div>
         </div>

         
         <div className="bg-white p-4 rounded-lg shadow-md">
             <div className="relative">
                 <img src="../../public/product/chair.svg" alt="Chair" className="w-full h-32 object-top rounded"/>
                 <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-25%</span>
             </div>
             <h2 className="text-lg font-semibold mt-2">S-Series Comfort Chair</h2>
             <div className="flex justify-between items-center mt-1">
                 <p className="text-red-600 text-xl font-bold">$375</p>
                 <p className="line-through text-gray-500">$400</p>
             </div>
             <div className="flex mt-2 justify-between items-center">
                 <span className="flex items-center text-yellow-500">
                     ★★★★★
                 </span>
                 <span className="text-gray-500 text-sm">(99)</span>
             </div>
         </div>
     </div>

     <div className="mt-8 flex justify-center">
         <button className="bg-red-500 text-white py-2 px-6 rounded-lg shadow hover:bg-red-600 transition">View All Products</button>
     </div>
</div>
      </div>
   
    </div>
  )
}

export default HomeProduct
