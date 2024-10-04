import React from 'react'

function HomeCategories() {
  return (
<>
<div className='h-[500px] mt-[50px]'>

<div className='flex justify-around'>

<span className='flex flex-col gap-y-3'>
     <h2 className="text-red-600 font-bold text-lg">Categories</h2>
     <h2 className="text-4xl font-bold text-gray-900">Browse By Categories</h2>
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

<div className=' flex gap-5 ml-[550px] m-10'>


<div className=' w-[170px] h-[145px] hover:bg-red-400 '><img src="../../public/categories/phone.png" alt="" /> </div>
<div className=' w-[170px] h-[145px] hover:bg-red-400 '> <img src="../../public/categories/computer.png" alt="       " /></div>

<div className=' w-[170px] h-[145px] hover:bg-red-400 '> <img src="../../public/categories/gaming.png" alt="" /></div>
<div className=' w-[170px] h-[145px] hover:bg-red-400 '><img src="../../public/categories/headphone.png" alt="" /> </div>
<div className=' w-[170px] h-[145px] hover:bg-red-400'> <img src="../../public/categories/watch.png" alt="" /></div>
<div className=' w-[170px] h-[145px] hover:bg-red-400  '><img src="../../public/categories/watch.png" alt="" /> </div>
</div>
<hr />

</div>

</>
  )
}

export default HomeCategories
