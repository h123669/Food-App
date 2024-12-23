import React, { useEffect, useState } from 'react'
import "./IngredientsDetails.module.css"
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function IngredientsDetails() {
  let {Ingredients}=useParams()
  console.log(Ingredients);
  let [IngredientsDetail,setIngredientsDetail]=useState([])
  async function displayIngredientsDetail(Ingredients) {
    try{
      let response=await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${Ingredients}`)
      console.log(response?.data?.meals);
      setIngredientsDetail(response?.data?.meals)
      
    }catch(error){
console.log(error);

    }
    
  }
  useEffect(()=>{
    displayIngredientsDetail(Ingredients)
  },[])
  return <>
  <div className='flex flex-row flex-wrap gap-4 justify-center py-20 '>
{IngredientsDetail.length ===0?
  <div className='w-full flex justify-center items-center'>
    <span className="loader"></span>
  </div>:
  IngredientsDetail?.map((ele)=>{ return(
    <div key={ele.idMeal} className='flex flex-col items-center w-1/3 lg:w-1/5'>
      <Link to={`../RecipesDetails/${ele.idMeal}`}>
    <img src={ele.strMealThumb} className='object-cover rounded-md' alt={ele.strMeal} />
    <h3 className='text-center text-xl'>{ele.strMeal}</h3>
      </Link>
    </div>
)

})
}
  

  </div>
  
  </>
}
