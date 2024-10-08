import React from 'react';

function HomeProduct() {
  return (
    <div>
      <div className='mt-10'> 
      <div className='h-auto w-full lg:w-[90%] ml-[5%] shadow-lg'>
  <div className='flex justify-between m-5 flex-wrap'>
    <span className='flex flex-col gap-y-3'>
      <h2 className="text-red-600 font-bold text-lg"> Our Products </h2>
      <h2 className="text-4xl font-bold text-gray-900"> Explore Our products</h2>
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

        <div className="max-w-[1300px] mx-auto mt-10"> 
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         
            {[
              {
                imgSrc: "../../public/product/gamepad.svg",
                title: "HAVIT HV-G92 Gamepad",
                price: 120,
                originalPrice: 160,
                discount: "-40%",
                rating: 88,
              },
              {
                imgSrc: "../../public/product/keybord.svg",
                title: "AK-900 Wired Keyboard",
                price: 960,
                originalPrice: 1160,
                discount: "-35%",
                rating: 75,
              },
              {
                imgSrc: "../../public/product/desktop.svg",
                title: "IPS LCD Gaming Monitor",
                price: 370,
                originalPrice: 400,
                discount: "-30%",
                rating: 99,
              },
              {
                imgSrc: "../../public/product/chair.svg",
                title: "S-Series Comfort Chair",
                price: 375,
                originalPrice: 400,
                discount: "-25%",
                rating: 99,
              },
            ].map((product, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative">
                  <img src={product.imgSrc} alt={product.title} className="w-full h-32 object-top rounded" />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">{product.discount}</span>
                </div>
                <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-red-600 text-xl font-bold">${product.price}</p>
                  <p className="line-through text-gray-500">${product.originalPrice}</p>
                </div>
                <div className="flex mt-2 justify-between items-center">
                  <span className="flex items-center text-yellow-500">★★★★★</span>
                  <span className="text-gray-500 text-sm">({product.rating})</span>
                </div>
              </div>
            ))}
          </div>

         
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {[
              {
                imgSrc: "../../public/product/gamepad.svg",
                title: "HAVIT HV-G92 Gamepad",
                price: 120,
                originalPrice: 160,
                discount: "-40%",
                rating: 88,
              },
              {
                imgSrc: "../../public/product/keybord.svg",
                title: "AK-900 Wired Keyboard",
                price: 960,
                originalPrice: 1160,
                discount: "-35%",
                rating: 75,
              },
              {
                imgSrc: "../../public/product/desktop.svg",
                title: "IPS LCD Gaming Monitor",
                price: 370,
                originalPrice: 400,
                discount: "-30%",
                rating: 99,
              },
              {
                imgSrc: "../../public/product/chair.svg",
                title: "S-Series Comfort Chair",
                price: 375,
                originalPrice: 400,
                discount: "-25%",
                rating: 99,
              },
            ].map((product, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative">
                  <img src={product.imgSrc} alt={product.title} className="w-full h-32 object-top rounded" />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">{product.discount}</span>
                </div>
                <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-red-600 text-xl font-bold">${product.price}</p>
                  <p className="line-through text-gray-500">${product.originalPrice}</p>
                </div>
                <div className="flex mt-2 justify-between items-center">
                  <span className="flex items-center text-yellow-500">★★★★★</span>
                  <span className="text-gray-500 text-sm">({product.rating})</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button className="bg-red-500 text-white py-2 px-6 rounded-lg shadow hover:bg-red-600 transition">View All Products</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProduct;
