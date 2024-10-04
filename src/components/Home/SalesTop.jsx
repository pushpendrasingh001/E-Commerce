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
    <div className="flex  justify-between mb-10 h-[100px]">
  

    <span className='flex flex-col gap-y-3'>
       <h2 className="text-red-600 font-bold text-lg">Today's</h2>
       <h2 className="text-4xl font-bold text-gray-900">Flash Sales</h2>
    </span>

<span>  <div className="flex mt-6 space-x-4">
    {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
      <div key={index} className="text-center">
        <span className="block text-3xl font-semibold text-gray-900">
          {timeLeft[unit]?.toString().padStart(2, '0') || '00'}
        </span>
        <span className="text-sm text-gray-500">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
      </div>
    ))}
  </div>
</span>
  

 
      <div className="flex space-x-4 justify-items-end">
     <button>
      <img src="../../public/leftarrow.svg" alt="" />
     </button>
     <button>
     <img src="../../public/rightarrow.svg" alt="" />
     </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
