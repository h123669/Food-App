import React, { useEffect, useState } from 'react'
import "./Ingredients.module.css"
import axios from 'axios';
import { Link } from 'react-router';
import { PiHamburger } from "react-icons/pi";


export default function Ingredients() {
  let[Ingredients,setIngredients]=useState([])
  async function displayIngredients() {


    try{
      
      let response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
        console.log(response.data.meals.slice(0, 20));
        setIngredients(response.data.meals.slice(0, 20))

    }catch(error){
        console.log(error);
        
    }
    
  }

useEffect(()=>{
  displayIngredients()
},[])
  return <>
  <div className='flex flex-row flex-wrap gap-4 justify-center py-20 container'>
    {Ingredients?.length === 0? (
      <div className='w-full flex justify-center items-center'>
        <span className="loader"></span>
      </div>
    ) : Ingredients?.map((ele)=>{ return(
      <div key={ele.idIngredient} className='flex flex-col w-1/3  lg:w-1/5'>
        <Link to={`/IngredientsDetails/${ele.strIngredient}`}>
      <span className='flex justify-center' ><PiHamburger size={50}/></span>
      <h3 className='text-center text-xl'>{ele.strIngredient}</h3>
      <p>{ele.strDescription.split(" ").slice(0,20).join(" ")}</p>
        </Link>
      </div>
  )

  }) }
 

  </div>
  
  </>
}
