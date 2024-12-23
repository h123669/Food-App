import React from 'react'
import "./Footer.module.css"
import { Link } from 'react-router'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";


export default function Footer() {
  return <>
  

<footer className="bg-yellow-700 rounded-lg shadow m-4 dark:bg-yellow-800 ">
  <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span className="text-sm text-yellow-100 sm:text-center dark:text-yellow-100">© 2024 <a href="/" className="hover:underline">AllRecipes™</a>. All Rights Reserved.
    </span>
    <ul className="flex gap-3 flex-wrap items-center mt-3 text-sm font-medium text-yellow-100 dark:text-yellow-100 sm:mt-0">
              <li>
                <Link
                  to={"Contact Us"}
                  className="block py-2 px-3 text-white bg-yellow-700 rounded md:bg-transparent md:text-yellow-100 md:p-0 dark:text-white md:dark:text-yellow-500"
                  aria-current="page"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="block py-2 px-3 text-white bg-yellow-700 rounded md:bg-transparent md:text-yellow-100 md:p-0 dark:text-white md:dark:text-yellow-500"
                  aria-current="page"
                >
                  about
                </Link>
              </li>
            <li>
              <FaFacebook/>
            </li>  
            <li>
              <FaInstagram/>
            </li>  
            <li>
              <FaTwitter/>
            </li>  
            <li>
              <FaTiktok/>
            </li>  
              
    </ul>
  </div>
</footer>


  
  </>
}
