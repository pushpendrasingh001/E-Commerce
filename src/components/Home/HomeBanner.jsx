import React from 'react';

function HomeBanner() {
  return (
    <div className="w-full max-w-[1350px] mx-auto"> 
      <div className="relative h-60 md:h-80 lg:h-[600px]"> 
        <img 
          src="../../public/categories/banner.png" 
          alt="Home Banner" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
      </div>
    </div>
  );
}

export default HomeBanner;
