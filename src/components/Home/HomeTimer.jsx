import React, { useEffect, useState } from 'react';


const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              } else {
                clearInterval(countdown);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (

    <div className='h-auto w-full lg:w-[90%] shadow-lg'>
  <div className='flex justify-between m-5 flex-wrap'>
    <span className='flex flex-col gap-y-3'>
      <h2 className="text-red-600 font-bold text-lg">Today's  </h2>
      <h2 className="text-4xl font-bold text-gray-900"> Flash Sales</h2>
    </span>
   <span className="flex mt-4 md:mt-0 space-x-4">
        {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
         <div key={index} className="text-center">
         <span className="block text-2xl md:text-3xl font-semibold text-gray-900">
              {timeLeft[unit]?.toString().padStart(2, '0') || '00'}
           </span>
           <span className="text-xs md:text-sm text-gray-500">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
         </div>
         ))}
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
  );
};


function HomeTimer() {
  return (
    <div className="flex flex-col items-center mt-20">
      <hr />
      <CountdownTimer />
      <div className="max-w-screen-xl w-full px-4 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <div className="relative">
              <img src="../../public/product/gamepad.svg" alt="Gamepad" className="w-full h-32 object-contain rounded" />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-40%</span>
            </div>
            <h2 className="text-lg md:text-xl font-semibold mt-2">HAVIT HV-G92 Gamepad</h2>
            <div className="flex justify-between items-center mt-1">
              <p className="text-red-600 text-xl font-bold">$120</p>
              <p className="line-through text-gray-500">$160</p>
            </div>
            <div className="flex mt-2 justify-between items-center">
              <span className="flex items-center text-yellow-500">★★★★★</span>
              <span className="text-gray-500 text-sm">(88)</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <div className="relative">
              <img src="../../public/product/keybord.svg" alt="Keyboard" className="w-full h-32 object-contain rounded" />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-35%</span>
            </div>
            <h2 className="text-lg md:text-xl font-semibold mt-2">AK-900 Wired Keyboard</h2>
            <div className="flex justify-between items-center mt-1">
              <p className="text-red-600 text-xl font-bold">$960</p>
              <p className="line-through text-gray-500">$1160</p>
            </div>
            <div className="flex mt-2 justify-between items-center">
              <span className="flex items-center text-yellow-500">★★★★★</span>
              <span className="text-gray-500 text-sm">(75)</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <div className="relative">
              <img src="../../public/product/desktop.svg" alt="Monitor" className="w-full h-32 object-contain rounded" />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-30%</span>
            </div>
            <h2 className="text-lg md:text-xl font-semibold mt-2">IPS LCD Gaming Monitor</h2>
            <div className="flex justify-between items-center mt-1">
              <p className="text-red-600 text-xl font-bold">$370</p>
              <p className="line-through text-gray-500">$400</p>
            </div>
            <div className="flex mt-2 justify-between items-center">
              <span className="flex items-center text-yellow-500">★★★★★</span>
              <span className="text-gray-500 text-sm">(99)</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <div className="relative">
              <img src="../../public/product/chair.svg" alt="Chair" className="w-full h-32 object-contain rounded" />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-25%</span>
            </div>
            <h2 className="text-lg md:text-xl font-semibold mt-2">S-Series Comfort Chair</h2>
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

        <div className="mt-8 flex justify-center">
          <button className="bg-red-500 text-white py-2 px-6 rounded-lg shadow hover:bg-red-600 transition">
            View All Products
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default HomeTimer;
