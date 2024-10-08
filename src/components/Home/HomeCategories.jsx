import React from 'react';

function HomeCategories() {
  return (
    <>
      <div className="mt-12 h-auto"> 
     
      <div className='h-auto w-full lg:w-[90%] ml-[5%] shadow-lg'>
  <div className='flex justify-between m-5 flex-wrap'>
    <span className='flex flex-col gap-y-3'>
      <h2 className="text-red-600 font-bold text-lg">Categories  </h2>
      <h2 className="text-4xl font-bold text-gray-900">Browse By Category</h2>
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


        <div className="flex flex-wrap justify-center gap-5 mt-16 mx-4">
          {[
            { id: 1, img: '../../public/categories/phone.png', alt: 'Phone' },
            { id: 2, img: '../../public/categories/computer.png', alt: 'Computer' },
            { id: 3, img: '../../public/categories/gaming.png', alt: 'Gaming' },
            { id: 4, img: '../../public/categories/headphone.png', alt: 'Headphones' },
            { id: 5, img: '../../public/categories/watch.png', alt: 'Watch' },
            { id: 6, img: '../../public/categories/watch.png', alt: 'Watch' },
          ].map((category) => (
            <div 
              key={category.id} 
              className="w-[170px] h-[145px] hover:bg-red-400 flex items-center justify-center"
            >
              <img src={category.img} alt={category.alt} className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>
        
       
      </div>
    </>
  );
}

export default HomeCategories;
