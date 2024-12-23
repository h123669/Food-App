import React, { useState } from 'react';
import "./Navbar.module.css";
import { LuCookingPot } from "react-icons/lu";
import { Link } from 'react-router-dom';  

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-amber-100 border-gray-200 dark:bg-gray-900 lg:fixed top-0 start-0 end-0 z-20">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white flex gap-1">
              <LuCookingPot color='red' /> Allrecipes
            </span>
          </Link>

          <button
            onClick={toggleMenu}  
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen ? "true" : "false"}  
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`} id="navbar-default">
            <ul className="font-medium flex flex-col gap-2 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-amber-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to={"catergories"}
                  className="block py-2 px-3 text-white bg-yellow-700 rounded md:bg-transparent md:text-yellow-700 md:p-0 dark:text-white md:dark:text-yellow-500"
                  aria-current="page"
                >
                  catergories
                </Link>
              </li>
              <li>
                <Link
                  to={"area"}
                  className="block py-2 px-3 text-white bg-yellow-700 rounded md:bg-transparent md:text-yellow-700 md:p-0 dark:text-white md:dark:text-yellow-500"
                  aria-current="page"
                >
                  Area
                </Link>
              </li>
              <li>
                <Link
                  to={"ingredients"}
                  className="block py-2 px-3 text-white bg-yellow-700 rounded md:bg-transparent md:text-yellow-700 md:p-0 dark:text-white md:dark:text-yellow-500"
                  aria-current="page"
                >
                  Ingredients
                </Link>
              </li>
              <li>
                <Link
                  to={"search"}
                  className="block py-2 px-3 text-white bg-yellow-700 rounded md:bg-transparent md:text-yellow-700 md:p-0 dark:text-white md:dark:text-yellow-500"
                  aria-current="page"
                >
                  Search
                </Link>
              </li>
              <li>
                <Link
                  to={"Contact Us"}
                  className="block py-2 px-3 text-white bg-yellow-700 rounded md:bg-transparent md:text-yellow-700 md:p-0 dark:text-white md:dark:text-yellow-500"
                  aria-current="page"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
