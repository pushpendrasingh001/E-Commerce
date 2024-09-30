import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Carousal() {
  const data=[

    {
  img:'../../public/hero.png'
},
{
  img:'../../public/hero.png'
},
{
  img:'../../public/hero.png'
},
{
  img:'../../public/hero.png'
},
{
  img:'../../public/hero.png'
},

]

 var settings = {

    infinite:true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
 
    autoplaySpeed: 5000,
    
    
  };
  return(<>
  <div >
      <Slider {...settings}>
        
 {data.map((s)=>(

  <div className='  '>
<img src={s.img} className='h-[344px] w-[8922]'/>
  

   </div>


))}

      </Slider>
  </div>
  </>)

}

export default Carousal