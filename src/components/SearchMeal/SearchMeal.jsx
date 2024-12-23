import React, { useState } from 'react'
import "./SearchMeal.module.css"
import axios from 'axios';
import { Link } from 'react-router';

export default function SearchMeal() {
  let [Search,setSearch]=useState('')
  let [SearchFOod,setSearchFOod]=useState([])

  async function SearchMeals(event) {
    event.preventDefault(); 
    if (Search.trim()) {
      try {
        let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Search}`);
        console.log(response.data.meals);
        
        setSearchFOod(response.data.meals); 
        
      } catch (error) {
        console.log(error);
      }
    }
  }
  return <>
<form className="max-w-md mx-auto py-20" onClick={SearchMeals}>   
  <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
      </svg>
    </div>
    <input type="search" value={Search} onChange={(e) => setSearch(e.target.value)} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Search By Name" required />
    <button  type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Search</button>
  </div>
</form>

<div className='flex flex-row flex-wrap gap-4 justify-center py-5 px-2'>
        {(
          SearchFOod.map((ele) => {
            return (
              <div key={ele.idMeal} className='flex flex-col items-center  w-1/3 lg:w-1/5 '>
                <Link to={`../RecipesDetails/${ele.idMeal}`}>
              <img src={ele.strMealThumb} className='object-cover rounded-md' />
                <h3 className='text-center text-2xl font-medium text-yellow-700'>{ele.strMeal}</h3>
                </Link>
              </div>
            );
          })
        ) }
      </div>
  
  </>
}
