import React, { useEffect, useState } from 'react'
import "./Recipes.module.css"
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Recipes() {
  let [recipes,setRecipes]=useState([])
  async function displayProduct() {

    try{
      
      let response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian');
        // console.log(response.data.meals);
        setRecipes(response.data.meals)

    }catch(error){
        console.log(error);
        
    }
    
  }

useEffect(()=>{
  displayProduct()
},[])
  return <>
  <h2 className='text-2xl text-orange-800 p-3 font-semibold'>Popular Recipes</h2>
  <div className='flex flex-row flex-wrap gap-4 justify-center '>
  {recipes.length===0 ?(
      <div className='w-full flex justify-center items-center'>
        <span className="loader"></span>
      </div>
    )
  :recipes.map((ele)=>{ return(
    <div key={ele.idMeal} className='flex flex-col items-center w-1/3  lg:w-1/5'>
      <Link to={`RecipesDetails/${ele.idMeal}`}>
    <img src={ele.strMealThumb} className='object-cover rounded-md' alt={ele.strMeal} />
    <h3 className='text-center text-xl'>{ele.strMeal}</h3>
      </Link>
    </div>
)

})}
  

  </div>
  </>
}

