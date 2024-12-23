import React, { useEffect, useState } from 'react'
import "./CategoryDetails.module.css"
import { Link, useParams } from 'react-router';
import axios from 'axios';

export default function CategoryDetails() {
  let {category}=useParams()
  console.log(category);
  let [Category,setCategory]=useState([])
  async function displayCategory(category) {
    try{
      let response=await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      console.log(response.data.meals);
      setCategory(response.data.meals)
      
    }catch(error){
console.log(error);

    }
    
  }
  useEffect(()=>{
    displayCategory(category)
  },[])
  return<>
  <div className='flex flex-row flex-wrap gap-4 justify-center py-20 '>
    {Category.length === 0 ? 
    <div className='w-full flex justify-center items-center'>
    <span className="loader"></span> 
  </div>
    :Category?.map((ele)=>{ return(
      <div key={ele.idMeal} className='flex flex-col items-center w-1/3 lg:w-1/5 '>
        <Link to={`../RecipesDetails/${ele.idMeal}`}>
      <img src={ele.strMealThumb} className='object-cover rounded-md' alt={ele.strMeal} />
      <h3 className='text-center text-xl'>{ele.strMeal}</h3>
        </Link>
      </div>
  )

  })}
  

  </div>
  </>
}
