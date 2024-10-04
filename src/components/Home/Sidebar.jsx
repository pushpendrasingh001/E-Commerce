import React from 'react'
import Carousal from './Corousal'
function Sidebar() {
  return (
   <div classNameName=''>


<div className="flex">
  <div className="flex">

    <div className="border-r-2   ml-[160px]  h-[344px] w-[217px]  mt-[100px] p-4">
      <ul >
        <li className="py-2 px-4 cursor-pointer hover:bg-gray-100 flex justify-between items-center">
          Men's Fashion <span>&gt;</span>
        </li>
        <li className="py-2 px-4 cursor-pointer hover:bg-gray-100 flex justify-between items-center">
          Woman's Fashion <span>&gt;</span>
        </li>   <li className="py-2 px-4 cursor-pointer hover:bg-gray-100 flex justify-between items-center">
          Electronics 
        </li>   <li className="py-2 px-4 cursor-pointer hover:bg-gray-100 flex justify-between items-center">
          Home & Lifestyle 
        </li>   <li className="py-2 px-4 cursor-pointer hover:bg-gray-100 flex justify-between items-center">
          Medicine 
        </li>   <li className="py-2 px-4 cursor-pointer hover:bg-gray-100 flex justify-between items-center">
          Sports & Outdoor 
        </li>
        <li className="py-2 px-4 cursor-pointer hover:bg-gray-100 flex justify-between items-center">
         Groceries & Pet 
        </li> <li className="py-2 px-4 cursor-pointer hover:bg-gray-100 flex justify-between items-center">
         Health & Beauty
        </li> <li className="py-2 px-4 cursor-pointer hover:bg-gray-100 flex justify-between items-center">
          Baby & Toys
        </li>

    </ul>
    </div>

 <div className="  w-[893px]  h-[344px] ml-[413px] mt-[100px] relative">
      <Carousal></Carousal>
    </div> 
  </div>
</div>

 </div>
  )
}

export default Sidebar
