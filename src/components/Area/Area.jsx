import React, { useEffect, useState } from 'react'
import "./Area.module.css"
import axios from 'axios';
import { Link } from 'react-router';
import { MdAccountBalance } from "react-icons/md";
import { useRecoilState } from 'recoil';
import { AreaShare } from '../Atom/Atom';

export default function Area() {
  let [AreaState]=useRecoilState(AreaShare)

  console.log(AreaState);
  
  

  return (
    <>
      <div className='flex flex-row flex-wrap gap-4 justify-center py-20 container'>
        {AreaState.length === 0 ? (
          <div className='w-full flex justify-center items-center'>
            <span className="loader"></span>
          </div>
        ) : (
          AreaState.map((ele) => {
            return (
              <div key={ele.idCategory} className='flex flex-col w-1/3 lg:w-1/5'>
                <Link to={`../AreaDetails/${ele.strArea}`}>
                  <span className='flex justify-center'>
                    <MdAccountBalance size={80} color='brown' />
                  </span>
                  <h3 className='text-center text-xl'>{ele.strArea}</h3>
                </Link>
              </div>
            );
          })
        )}
      </div>


    </>
  );
}
