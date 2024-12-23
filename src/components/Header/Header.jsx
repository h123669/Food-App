import React from 'react';
import "./Header.module.css";
import backgroundImage from '../../img/Capture-4.png';
import { FaRegFaceGrinHearts } from "react-icons/fa6";
import { Link } from 'react-router-dom'; // تأكد من أنك تستخدم النسخة الصحيحة من React Router

export default function Header() {
  return (
    <>
      <div
        className="header flex justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-transparent text-center text-5xl sm:text-3xl md:text-4xl lg:text-5xl flex gap-1 bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 font-bold">
            Discover the world of food
            
          </h2>
          <p className="text-yellow-600 text-center text-3xl sm:text-xl md:text-2xl lg:text-3xl">
            Enjoy our wide range of recipes and try some of our favorite dishes
          </p>
          <button className="bg-yellow-600 p-2 rounded-md  w-[25%] text-white hover:bg-orange-600 mt-4">
            <Link to="/Area" className="block w-full h-full text-center">
              Discover Now
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
