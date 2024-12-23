import React, { useEffect, useState } from 'react'
import "./Home.module.css"
import Recipes from '../Recipes/Recipes'
import Header from '../Header/Header'
import ShareSlider from '../ShareSlider/ShareSlider'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { AreaShare } from '../Atom/Atom'
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";



export default function Home() {
  let [AreaState,setAreaState]=useRecoilState(AreaShare)

  
  console.log(AreaState);

  async function displayArea() {
    try {
      let response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      setAreaState(response.data.meals);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    displayArea();
  }, []);


 



  return <>
  <div className='container w-full lg:w-[90%] lg:m-auto py-20 px-10'>
    <Header/>
    <ShareSlider/>
    <Recipes/>
    
  </div>
  
  </>
}
