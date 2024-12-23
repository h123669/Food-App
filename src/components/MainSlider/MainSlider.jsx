import React from 'react'
import "./MainSlider.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import photo1 from '../../img/46653.avif'
import photo2 from '../../img/46654.avif'
import photo3 from '../../img/46655.avif'
import photo4 from '../../img/46656.avif'
import photo5 from '../../img/46657.avif'
import photo6 from '../../img/46658.avif'

export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      <div>
        <img className='w-full object-cover' src={photo1} alt="Slider image 5" />
      </div>
      <div>
        <img className='w-full object-cover' src={photo2} alt="Slider image 6" />
      </div>
      <div>
        <img className='w-full object-cover' src={photo3} alt="Slider image 6" />
      </div>
      <div>
        <img className='w-full object-cover' src={photo4} alt="Slider image 6" />
      </div>
      <div>
        <img className='w-full object-cover' src={photo5} alt="Slider image 6" />
      </div>
      <div>
        <img className='w-full object-cover' src={photo6} alt="Slider image 6" />
      </div>
    </Slider>
  );
}
