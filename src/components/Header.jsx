import React, { useEffect, useRef, useState } from 'react'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaSearch, FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';



const Header = () => {
  let [cateShow, setCateShow] = useState(false)
  let [userShow, setUserShow] = useState(false)
  let [cartShow, setCartShow] = useState(false)
  let cateref = useRef()
  let userref = useRef()
  let cartref = useRef()
  useEffect(()=>{
    document.addEventListener("click",(e)=>{
      if(cateref.current.contains(e.target)){
        setCateShow(!cateShow)
      }else{
        setCateShow(false)
      }
      if(userref.current.contains(e.target)){
        setUserShow(!userShow)
      }else{
        setUserShow(false)
      }
      if(cartref.current.contains(e.target)){
        setCartShow(!cartShow)
      }else{
        setCartShow(false)
      }
    })
  },[cateShow, userShow, cartShow])
  return (
    <div className="header max-w-container mx-auto flex items-center py-[25px] z-50">
      <div className='cate w-[33.33%] relative'>
        <div className="icons flex items-center gap-3 py-[16px]" ref={cateref}>
          <HiMiniBars3BottomLeft className='cursor-pointer'/>
          <p className='cursor-pointer'>Shop by Category</p>
        </div>
        <div className='lg:w-[50%] w-full absolute top-[100%] left-0 z-50'>
          {cateShow && 
            <ul className='bg-[#262626] text-[#ffffff70]'>
              <li className='hover:text-[#fff] cursor-pointer px-[20px] py-[16px] hover:bg-[#ffffff20] hover:px-[40px] transition duration-[0.5s]'>Accesories</li>
              <li className='hover:text-[#fff] cursor-pointer px-[20px] py-[16px] hover:bg-[#ffffff20] hover:px-[40px] transition duration-[0.5s]'>Furniture</li>
              <li className='hover:text-[#fff] cursor-pointer px-[20px] py-[16px] hover:bg-[#ffffff20] hover:px-[40px] transition duration-[0.5s]'>Electronics</li>
              <li className='hover:text-[#fff] cursor-pointer px-[20px] py-[16px] hover:bg-[#ffffff20] hover:px-[40px] transition duration-[0.5s]'>Clothes</li>
              <li className='hover:text-[#fff] cursor-pointer px-[20px] py-[16px] hover:bg-[#ffffff20] hover:px-[40px] transition duration-[0.5s]'>Bags</li>
            </ul>
          }
        </div>
      </div>
      <div className="search w-[33.33%] relative">
        <input type="text" placeholder='Search Products' className='w-full py-[16px] px-[20px]'/>
        <div className="absolute top-[50%] right-[20px] translate-y-[-50%]">
          <FaSearch/>
        </div>
      </div>
      <div className="btns w-[33.33%] flex justify-end gap-5 items-center relative">
        <div className="usr flex items-center py-[20px]" ref={userref}>
          <FaUserAlt/>
          <IoMdArrowDropdown/>
        </div>
        {
          userShow &&
          <ul className='absolute top-[100%] right-0 w-[200px] bg-[#262626] text-[#ffffff70]'>
          <li className='hover:text-[#fff] cursor-pointer px-[20px] py-[16px] hover:bg-[#ffffff20] hover:px-[40px] transition duration-[0.5s]'><Link to='/login'>My Account</Link></li>
          <li className='hover:text-[#fff] cursor-pointer px-[20px] py-[16px] hover:bg-[#ffffff20] hover:px-[40px] transition duration-[0.5s]'>Log Out</li>
          </ul>
        }
        <div className="cart" ref={cartref}>
          <FaShoppingCart/>
        </div>
        {
          cartShow &&
          <div className="cartpop absolute top-[100%] right-0 w-[80%] bg-[#ff000080]">
            <ul>
              <li className='flex justify-between items-center p-[10px] hover:bg-[#e8e8e8] m-[10px] bg-[#fff]'>
                <div className="thumb w-[80px] h-[80px] bg-[#D8D8D8]"></div>
                <div className="txt">
                  <h3 className='font-bold'>Black Smart Watch</h3>
                  <p>$44.00</p>
                </div>
                <ImCross/>
              </li>
              <li className='flex justify-between items-center p-[10px] hover:bg-[#e8e8e8] m-[10px] bg-[#fff]'>
                <div className="thumb w-[80px] h-[80px] bg-[#D8D8D8]"></div>
                <div className="txt">
                  <h3 className='font-bold'>Black Smart Watch</h3>
                  <p>$44.00</p>
                </div>
                <ImCross/>
              </li>
              <li className='flex justify-between items-center p-[10px] hover:bg-[#e8e8e8] m-[10px] bg-[#fff]'>
                <div className="thumb w-[80px] h-[80px] bg-[#D8D8D8]"></div>
                <div className="txt">
                  <h3 className='font-bold'>Black Smart Watch</h3>
                  <p>$44.00</p>
                </div>
                <ImCross/>
              </li>
            </ul>
            <div className="total p-[15px]">
              <p>Subtotal: <span className='font-bold'>$44.00</span></p>
              <div className="btns flex justify-between">
                <Link to='/cart' className='py-[16px] px-[40px] border-[1px] border-[#000] hover:bg-[#000] hover:text-[#fff] duration-[1s]'>View Cart</Link>
                <Link to='/' className='py-[16px] px-[40px] border-[1px] border-[#000] hover:bg-[#000] hover:text-[#fff] duration-[1s]'>Checkout</Link>

              </div>
            </div>
          </div>
        }
      </div>

    </div>
  )
}

export default Header