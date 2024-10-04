import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Carousal() {
  const data=[

    {
      id:1,
  img:'../../public/hero.png'
},
{
  id:2,
  img:'../../public/hero.png'
},
{
  id:3,
  img:'../../public/hero.png'
},
{
  id:4,
  img:'../../public/hero.png'
},
{
id:5,
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

  <div className='  ' key={s.id}>
<img src={s.img} className='h-[344px] w-[8922]'/>
  

   </div>


))}

      </Slider>
  </div>
  </>)

}

export default Carousal