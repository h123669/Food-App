import React, { useEffect, useState } from 'react';
import "./Categories.module.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Categories() {
  let [category, setCategory] = useState([]); 

  async function displayCategory() {
    try {
      let response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      console.log(response.data.categories);
      setCategory(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    displayCategory();
  }, []);

  return (
    <>
      <div className='flex flex-row flex-wrap gap-4 justify-center py-20 px-10'>
        {category.length === 0 ? (
          <div className='w-full flex justify-center items-center'>
            <span className="loader"></span> 
          </div>
        ) : (
          category.map((ele) => {
            return (
              <div key={ele.idCategory} className='flex flex-col items-center sm:w-1/3 '>
                <Link to={`../CategoryDetails/${ele.strCategory}`}>
                  <img 
                    src={ele.strCategoryThumb} 
                    alt={ele.strCategory} 
                    className='object-cover rounded-md' 
                  />
                  <h3 className='text-center text-2xl font-medium text-yellow-700'>{ele.strCategory}</h3>
                  <p>{ele.strCategoryDescription.split(' ').slice(0, 50).join(" ")}</p>
                </Link>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
