import React, { useEffect, useState } from 'react'
import "./AreaDetails.module.css"
import { Link, useParams } from 'react-router'
import axios from 'axios';

export default function AreaDetails() {
  let { area } = useParams();
  console.log(area);
  
  let [Area, setArea] = useState([]);

  async function displayArea(area) {
    try {
      let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
      console.log(response.data.meals);
      setArea(response?.data?.meals);  
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    displayArea(area);
  
  }, []); 

  return (
    <>
      <div className='flex flex-row flex-wrap gap-4 justify-center py-20 container'>
        {Area.length === 0 ? (
          <div className='w-full flex justify-center items-center'>
            <span className="loader"></span> 
          </div>
        ) : (
          Area.map((ele) => {
            return (
              <div key={ele.idMeal} className='flex flex-col items-center w-1/3 lg:w-1/5'>
                <Link to={`../RecipesDetails/${ele.idMeal}`}>
                  <img src={ele.strMealThumb} alt={ele.strMeal} className='object-cover rounded-md' />
                  <h3 className='text-center text-xl'>{ele.strMeal}</h3>
                </Link>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
