import React from 'react'
import "./ShareSlider.module.css"
import { useRecoilState } from 'recoil'
import { AreaShare } from '../Atom/Atom'
import { Link } from 'react-router'
import { MdAccountBalance } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 


export default function ShareSlider() {
    let [AreaState]=useRecoilState(AreaShare)
    console.log(AreaState);
    
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024, 
          settings: {
            slidesToShow:8,
          }
        },
        {
          breakpoint: 768, 
          settings: {
            slidesToShow:4,
          }
        },
        {
          breakpoint: 480, 
          settings: {
            slidesToShow:4,
          }
        }
      ]
    };

    
    
    
  
  return <><div className='py-5'>

      <Slider {...settings}>
            {AreaState?.map((ele) => {
              return (
                <div key={ele.idCategory} className='flex flex-col'>
                  <Link to={`../AreaDetails/${ele.strArea}`}>
                    <span className='flex justify-center'>
                      <MdAccountBalance size={80} color='brown' />
                    </span>
                    <h3 className='text-center text-xl'>{ele.strArea}</h3>
                  </Link>
                </div>
              );
            })}
          </Slider>
  </div>
    </>




  
  
  
} 
