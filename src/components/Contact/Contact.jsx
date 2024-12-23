import React from 'react'
import "./Contact.module.css"
import MainSlider from '../MainSlider/MainSlider'
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
   const box = {
      width: 100,
      height: 100,
      borderRadius: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      bottom: '100px',  
      right: '20px',    
        
  }
  return <>
  <div className='w-full lg:w-[90%] m-auto'>

  <h2 className='text-2xl text-orange-800 p-3 font-semibold pt-20'>Contact Us</h2>
  <div className='flex flex-col lg:flex-row flex-wrap justify-center justify-center items-center'>

  <div className='w-1/2 pb-3'>
    <MainSlider/>
  </div>

  <div className='w-1/2'>
<form className="max-w-md mx-auto">
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-yellow-900 bg-transparent border-0 border-b-2 border-yellow-300 appearance-none dark:text-white dark:border-yellow-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " requiyellow />
      <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-yellow-500 dark:text-yellow-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-yellow-900 bg-transparent border-0 border-b-2 border-yellow-300 appearance-none dark:text-white dark:border-yellow-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " requiyellow />
      <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-yellow-500 dark:text-yellow-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-yellow-900 bg-transparent border-0 border-b-2 border-yellow-300 appearance-none dark:text-white dark:border-yellow-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " requiyellow />
    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-yellow-500 dark:text-yellow-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
      <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-yellow-900 bg-transparent border-0 border-b-2 border-yellow-300 appearance-none dark:text-white dark:border-yellow-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " requiyellow />
      <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-yellow-500 dark:text-yellow-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-yellow-900 bg-transparent border-0 border-b-2 border-yellow-300 appearance-none dark:text-white dark:border-yellow-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " requiyellow />
      <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-yellow-500 dark:text-yellow-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
    </div>
  </div>
  
  <div>
  <label htmlFor="message" className="block mb-2 text-sm font-medium text-yellow-900 dark:text-white">Your message</label>
  <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-yellow-900 bg-yellow-50 rounded-lg border border-yellow-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yellow-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Leave a comment..." defaultValue={""} />
</div>


  <button type="submit" className="text-white mt-1  bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Submit</button>
</form>
  </div>
  </div>
  </div>

  <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        style={box}
         
      >
        <a href="https://www.whatsapp.com/">
          <FaWhatsapp size={50} color='green' />
        </a>
      </motion.div>
  
  </>
}
