import React from 'react'
import "./Header.module.css"
import backgroundImage from '../../img/Capture-4.png';
import { FaRegFaceGrinHearts } from "react-icons/fa6";
import { Link } from 'react-router';


export default function Header() {
  return <>
  <div className="header flex justify-center items-center" style={{backgroundImage:`url(${backgroundImage})`,backgroundRepeat: "no-repea",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height:" 100vh"}}>
      <div className='flex flex-col justify-center items-center '>
        <h2 className='text-transparent text-center text-5xl flex gap-1 bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 font-bold'>Discover the world of food<FaRegFaceGrinHearts/></h2>
        <p className='text-yellow-600 text-3xl'>Enjoy our wide range of recipes and try some of our favorite dishes</p>
        <button className="button bg-yellow-600 p-2 rounded-md w-[20%] lg:w-[15%] text-white hover:bg-orange-600"><Link to="/Area">Discover Now</Link></button>
      </div>
  </div>
  </>
}
