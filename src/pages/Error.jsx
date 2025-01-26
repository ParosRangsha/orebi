import React from 'react'
import { FaSearch } from "react-icons/fa";
import MyBtns from '../components/btns/MyBtns';

const Error = () => {
  return (
    <div className='max-w-container mx-auto'>
        <h2 className='text-[200px] font-bold'>404</h2>
        <p className='w-1/2'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
        <div className="search w-[33.33%] relative my-[30px]">
            <input type="text" placeholder='Search Products' className='w-full py-[16px] px-[20px] outline-[#dd0]'/>
            <div className="absolute top-[50%] right-[20px] translate-y-[-50%]">
                <FaSearch/>
            </div>
        </div>
        <MyBtns link="/" caption="Back To Home"/> 
    </div>
  )
}

export default Error