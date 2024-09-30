import React from 'react'
import Carousal from './Corousal'
function Sidebar() {
  return (
   <div className=''>


<div class="flex">
  <div class="flex">

    <div class="border-r-2   ml-[160px]  h-[344px] w-[217px]  mt-[100px] p-4">
      <ul >
        <li class="py-2 px-4 cursor-pointer hover:bg-gray-100 flex justify-between items-center">
          Men's Fashion <span>&gt;</span>
        </li>
        <li class="py-2 px-4 cursor-pointer hover:bg-gray-100 flex justify-between items-center">
          Woman's Fashion <span>&gt;</span>
        </li>   <li class="py-2 px-4 cursor-pointer hover:bg-gray-100 flex justify-between items-center">
          Electronics 
        </li>   <li class="py-2 px-4 cursor-pointer hover:bg-gray-100 flex justify-between items-center">
          Home & Lifestyle 
        </li>   <li class="py-2 px-4 cursor-pointer hover:bg-gray-100 flex justify-between items-center">
          Medicine 
        </li>   <li class="py-2 px-4 cursor-pointer hover:bg-gray-100 flex justify-between items-center">
          Sports & Outdoor 
        </li>
        <li class="py-2 px-4 cursor-pointer hover:bg-gray-100 flex justify-between items-center">
         Groceries & Pet 
        </li> <li class="py-2 px-4 cursor-pointer hover:bg-gray-100 flex justify-between items-center">
         Health & Beauty
        </li> <li class="py-2 px-4 cursor-pointer hover:bg-gray-100 flex justify-between items-center">
          Baby & Toys
        </li>

    </ul>
    </div>

 <div class="  w-[893px]  h-[344px] ml-[413px] mt-[100px] relative">
      <Carousal></Carousal>
    </div> 
  </div>
</div>

 </div>
  )
}

export default Sidebar
