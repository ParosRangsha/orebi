import React from 'react'
import { Link } from 'react-router-dom'

const MyBtns = ({link, caption}) => {
  return (
    <div>
        <Link to={link} className='border-[1px] border-[#000] font-bold py-[16px] px-[50px] my-[20px] inline-block hover:bg-[#000] hover:text-[#fff] duration-[0.5s]'>{caption}</Link>
    </div>
  )
}

export default MyBtns