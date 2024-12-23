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
            slidesToShow:3,
          }
        },
        {
          breakpoint: 480, 
          settings: {
            slidesToShow:3,
          }
        }
      ],prevArrow: (
        <button style={{ backgroundColor: 'transparent', border: 'none', position: 'absolute', top: '50%', left: '10px', zIndex: '10' }}>
          <span style={{ fontSize: '30px', color: 'brown' }}>&#10094;</span> 
        </button>
      ),
      nextArrow: (
        <button style={{ backgroundColor: 'transparent', border: 'none', position: 'absolute', top: '50%', right: '10px', zIndex: '10' }}>
          <span style={{ fontSize: '30px', color: 'brown' }}>&#10095;</span> 
        </button>
      )
    };

    
    
    
  
  return <><div className='p-5'>

      <Slider {...settings}>
            {AreaState?.map((ele) => {
              return (
                <div key={ele.idCategory} className='flex flex-col '>
                  <Link to={`../AreaDetails/${ele.strArea}`}>
                    <span className='flex justify-center'>
                      <MdAccountBalance size={80} color='brown' />
                    </span>
                    <h3 className='text-center text-xl px-5'>{ele.strArea}</h3>
                  </Link>
                </div>
              );
            })}
          </Slider>
  </div>
    </>




  
  
  
} 
