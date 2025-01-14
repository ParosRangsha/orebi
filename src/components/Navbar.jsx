import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar w-full bg-white">
      <div className="max-w-container mx-auto py-[32px] flex items-center ">
        <div className="logo w-[15%]">
          <img src={logo} alt="" />
        </div>
        <div className="menu w-[85%] flex justify-center">
          <ul className='flex'>
            <li><Link to='/' className='px-[20px] font-bold hover:text-[#000]'>Home</Link></li>
            <li><Link to='/shop' className='px-[20px] text-[#767676] hover:text-[#000]'>Shop</Link></li>
            <li><Link to='/about' className='px-[20px] text-[#767676] hover:text-[#000]'>About</Link></li>
            <li><Link to='/contact' className='px-[20px] text-[#767676] hover:text-[#000]'>Contacts</Link></li>
            <li><Link to='/journal' className='px-[20px] text-[#767676] hover:text-[#000]'>Journal</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar