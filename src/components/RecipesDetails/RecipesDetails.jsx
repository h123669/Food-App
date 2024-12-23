import React, { useEffect, useState } from 'react'
import "./RecipesDetails.module.css"
import { useParams } from 'react-router'
import axios from 'axios';

export default function RecipesDetails() {
  let {id}=useParams()
  console.log(id);

  let [datails,setDetails] =useState([])

  async function displayDetails(id) {
    try{
      let response=await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      console.log(response.data.meals);
      setDetails(response.data.meals)
      
    }catch(error){
console.log(error);

    }
    
  }
  useEffect(()=>{
    displayDetails(id)
  },[])
  return <>
  {datails.length ===0 ?(
      <div className='w-full flex justify-center items-center'>
        <span className="loader"></span>
      </div>
    )
  : datails.map((ele)=>{ return(
    <div key={ele.idMeal} className="flex lg:flex-row flex-col py-20 px-8 gap-3">
    <div className='lg:w-1/3 w-full'>
      <img src={ele.strMealThumb} className='rounded-md' alt="" />
      <h3 className='text-2xl font-bold text-amber-800'>{ele.strMeal}</h3>
    </div>
    <div className='lg:w-2/3 w-full'>
    <h2 className='text-2xl font-bold text-amber-800 p-2'>Instructions</h2>
    <p>{ele.strInstructions}</p>
    <div className="flex">
    <h2 className=' font-bold text-amber-800 p-2'>Area : </h2> <span className='p-2'>{ele.strArea}</span>
    </div>
    <div className="flex">
    <h2 className=' font-bold text-amber-800 p-2'>Category : </h2> <span className='p-2'>{ele.strCategory}</span>
    </div>
    <h2 className=' font-bold text-amber-800 p-2'>Recipes : </h2>
    <div className='flex flex-wrap gap-3 '>
      {ele.strMeasure1 &&ele.strIngredient1 ?  
      <span className='bg-amber-100 rounded-md py-2 px-2'>{ele.strMeasure1}{ele.strIngredient1}</span>
      :null }
      {ele.strMeasure2 &&ele.strIngredient2 ?  
      <span className='bg-amber-100 rounded-md py-2 px-2'>{ele.strMeasure2}{ele.strIngredient2}</span>
      :null }
      {ele.strMeasure3 &&ele.strIngredient3 ?  
      <span className='bg-amber-100 rounded-md py-2 px-2'>{ele.strMeasure3}{ele.strIngredient3}</span>
      :null }
      {ele.strMeasure4 &&ele.strIngredient4 ?  
      <span className='bg-amber-100 rounded-md py-2 px-2'>{ele.strMeasure4}{ele.strIngredient4}</span>
      :null }
      {ele.strMeasure5 &&ele.strIngredient5 ?  
      <span className='bg-amber-100 rounded-md py-2 px-2'>{ele.strMeasure5}{ele.strIngredient5}</span>
      :null }
      {ele.strMeasure6 &&ele.strIngredient6 ?  
      <span className='bg-amber-100 rounded-md py-2 px-2'>{ele.strMeasure6}{ele.strIngredient6}</span>
      :null }
      {ele.strMeasure7 &&ele.strIngredient7 ?  
      <span className='bg-amber-100 rounded-md py-2 px-2'>{ele.strMeasure7}{ele.strIngredient7}</span>
      :null }
      {ele.strMeasure8 &&ele.strIngredient8 ?  
      <span className='bg-amber-100 rounded-md py-2 px-2'>{ele.strMeasure8}{ele.strIngredient8}</span>
      :null }
      {ele.strMeasure9 &&ele.strIngredient9 ?  
      <span className='bg-amber-100 rounded-md py-2 px-2'>{ele.strMeasure9}{ele.strIngredient9}</span>
      :null }
    {ele.strMeasure11 &&ele.strIngredient11 ?  
      <span className='bg-amber-100 rounded-md py-2 px-2'>{ele.strMeasure11}{ele.strIngredient11}</span>
      :null }
    {ele.strMeasure12 &&ele.strIngredient12 ?  
      <span className='bg-amber-100 rounded-md py-2 px-2'>{ele.strMeasure12}{ele.strIngredient12}</span>
      :null }
    {ele.strMeasure13 &&ele.strIngredient13 ?  
      <span className='bg-amber-100 rounded-md py-2 px-2'>{ele.strMeasure13}{ele.strIngredient13}</span>
      :null }
    {ele.strMeasure14 &&ele.strIngredient14 ?  
      <span className='bg-amber-100 rounded-md py-2 px-2'>{ele.strMeasure14}{ele.strIngredient14}</span>
      :null }
    </div>
    <h2 className=' font-bold text-amber-800 p-2'>Tags : </h2>
    <div className="flex gap-3">
      <a className='bg-green-200 rounded-md py-2 px-2' href={`${ele.strSource}`}>Source</a>
      <a className='bg-red-200 rounded-md py-2 px-2' href={`${ele.strYoutube}`}>Youtube</a>
      
    </div>
    </div>
  
    </div>
    )
  
    })}
 
  
  </>
}
