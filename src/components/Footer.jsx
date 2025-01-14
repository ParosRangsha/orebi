import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className="max-w-container mx-auto py-[50px] flex justify-between">
      <div className="items w-[15%]">
        <ul>
          <h2 className='font-bold pb-[16px]'>MENU</h2>
          <li className='py-[6px] text-[#6D6D6D] hover:text-[#000]'><Link to="/">Home</Link></li>
          <li className='py-[6px] text-[#6D6D6D] hover:text-[#000]'><Link to="/">Shop</Link></li>
          <li className='py-[6px] text-[#6D6D6D] hover:text-[#000]'><Link to="/">About</Link></li>
          <li className='py-[6px] text-[#6D6D6D] hover:text-[#000]'><Link to="/">Contact</Link></li>
          <li className='py-[6px] text-[#6D6D6D] hover:text-[#000]'><Link to="/">Journal</Link></li>
        </ul>
      </div>
      <div className="items w-[15%]">
        <ul>
          <h2 className='font-bold pb-[16px]'>SHOP</h2>
          <li className='py-[6px] text-[#6D6D6D] hover:text-[#000]'><Link to="/">Category 1</Link></li>
          <li className='py-[6px] text-[#6D6D6D] hover:text-[#000]'><Link to="/">Category 2</Link></li>
          <li className='py-[6px] text-[#6D6D6D] hover:text-[#000]'><Link to="/">Category 3</Link></li>
          <li className='py-[6px] text-[#6D6D6D] hover:text-[#000]'><Link to="/">Category 4</Link></li>
          <li className='py-[6px] text-[#6D6D6D] hover:text-[#000]'><Link to="/">Category 5</Link></li>
        </ul>
      </div>
      <div className="items w-[15%]">
        <ul>
          <h2 className='font-bold pb-[16px]'>HELP</h2>
          <li className='py-[6px] text-[#6D6D6D] hover:text-[#000]'><Link to="/">Privacy Policy</Link></li>
          <li className='py-[6px] text-[#6D6D6D] hover:text-[#000]'><Link to="/">Terms & Conditions</Link></li>
          <li className='py-[6px] text-[#6D6D6D] hover:text-[#000]'><Link to="/">Special E-shop</Link></li>
          <li className='py-[6px] text-[#6D6D6D] hover:text-[#000]'><Link to="/">Shipping</Link></li>
          <li className='py-[6px] text-[#6D6D6D] hover:text-[#000]'><Link to="/">Secure Payments</Link></li>
        </ul>
      </div>
      <div className="items w-[15%]">
        <h2 className='font-bold pb-[16px]'>(052) 611-5711</h2>
        <h2 className='font-bold pb-[16px]'>company@domain.com</h2>
      </div>
      <div className="items w-[35%] relative">
        <img src={logo} alt="logo" className='pb-[16px]' />
        <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio fugiat necessitatibus, laborum quasi ratione nisi odit eveniet id magni illo, iste dolore ullam laboriosam autem!</p>
        <p className='text-[#6D6D6D] absolute bottom-0 right-0'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
      </div>
    </div>
  )
}

export default Footer