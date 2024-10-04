
import React from 'react'
import  CountDownTimer from './SalesTop'
function HomeToday() {
  return (
    <div>
        
       <div className="w-[1300px] ml-[480px] mt-[200px]">
  <hr />
<CountDownTimer></CountDownTimer>
     
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

        <div className="mt-8 flex justify-center">
            <button className="bg-red-500 text-white py-2 px-6 rounded-lg shadow hover:bg-red-600 transition">View All Products</button>
        </div>
    </div>
    <hr />
    </div>
  )
}

export default HomeToday



