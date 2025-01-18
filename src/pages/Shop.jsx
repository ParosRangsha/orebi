import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TbCategoryPlus } from "react-icons/tb";
import { FaRibbon } from "react-icons/fa6";
import { IoGridSharp } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight, FaHeart, FaCartPlus } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { ApiData } from '../components/MyApi';

const Shop = () => {
  let data = useContext(ApiData)
  return (
    <div className="max-w-container mx-auto py-[50px] flex justify-between">
      <div className="w-[15%]">
        <ul className='mb-[50px]'>
          <h2 className='text-[20px] font-bold pb-[16px]'>Shop by Category</h2>
          <li className='py-[10px] text-[#6D6D6D] hover:text-[#000]'><Link to="/shop" className='flex gap-3 items-center'><TbCategoryPlus/> Category 1</Link></li>
          <li className='py-[10px] text-[#6D6D6D] hover:text-[#000]'><Link to="/shop" className='flex gap-3 items-center'><TbCategoryPlus/> Category 2</Link></li>
          <li className='py-[10px] text-[#6D6D6D] hover:text-[#000]'><Link to="/shop" className='flex gap-3 items-center'><TbCategoryPlus/> Category 3</Link></li>
          <li className='py-[10px] text-[#6D6D6D] hover:text-[#000]'><Link to="/shop" className='flex gap-3 items-center'><TbCategoryPlus/> Category 4</Link></li>
          <li className='py-[10px] text-[#6D6D6D] hover:text-[#000]'><Link to="/shop" className='flex gap-3 items-center'><TbCategoryPlus/> Category 5</Link></li>
        </ul>
        <ul className='mb-[50px]'>
          <h2 className='text-[20px] font-bold pb-[16px]'>Shop by Color</h2>
          <li className='py-[10px] text-[#6D6D6D] hover:text-[#000] flex gap-3 items-center'><div className="w-[11px] h-[11px] bg-[#000] rounded-[50%]"></div><Link to="/shop">Color 1</Link></li>
          <li className='py-[10px] text-[#6D6D6D] hover:text-[#000] flex gap-3 items-center'><div className="w-[11px] h-[11px] bg-[#f00] rounded-[50%]"></div><Link to="/shop">Color 2</Link></li>
          <li className='py-[10px] text-[#6D6D6D] hover:text-[#000] flex gap-3 items-center'><div className="w-[11px] h-[11px] bg-[#0f0] rounded-[50%]"></div><Link to="/shop">Color 3</Link></li>
          <li className='py-[10px] text-[#6D6D6D] hover:text-[#000] flex gap-3 items-center'><div className="w-[11px] h-[11px] bg-[#00f] rounded-[50%]"></div><Link to="/shop">Color 4</Link></li>
          <li className='py-[10px] text-[#6D6D6D] hover:text-[#000] flex gap-3 items-center'><div className="w-[11px] h-[11px] bg-[#ff0] rounded-[50%]"></div><Link to="/shop">Color 5</Link></li>
        </ul>
        <ul className='mb-[50px]'>
          <h2 className='text-[20px] font-bold pb-[16px]'>Shop by Brand</h2>
          <li className='py-[10px] text-[#6D6D6D] hover:text-[#000]'><Link to="/shop" className='flex gap-3 items-center'><FaRibbon/> Brand 1</Link></li>
          <li className='py-[10px] text-[#6D6D6D] hover:text-[#000]'><Link to="/shop" className='flex gap-3 items-center'><FaRibbon/> Brand 2</Link></li>
          <li className='py-[10px] text-[#6D6D6D] hover:text-[#000]'><Link to="/shop" className='flex gap-3 items-center'><FaRibbon/> Brand 3</Link></li>
          <li className='py-[10px] text-[#6D6D6D] hover:text-[#000]'><Link to="/shop" className='flex gap-3 items-center'><FaRibbon/> Brand 4</Link></li>
          <li className='py-[10px] text-[#6D6D6D] hover:text-[#000]'><Link to="/shop" className='flex gap-3 items-center'><FaRibbon/> Brand 5</Link></li>
        </ul>
        <ul className='mb-[50px]'>
          <h2 className='text-[20px] font-bold pb-[16px]'>Shop by Price</h2>
          <li className='py-[10px] text-[#6D6D6D] hover:text-[#000]'><Link to="/shop" className='flex gap-3 items-center'>$0.00 - $9.99</Link></li>
          <li className='py-[10px] text-[#6D6D6D] hover:text-[#000]'><Link to="/shop" className='flex gap-3 items-center'>$10.00 - $19.99</Link></li>
          <li className='py-[10px] text-[#6D6D6D] hover:text-[#000]'><Link to="/shop" className='flex gap-3 items-center'>$20.00 - $29.99</Link></li>
          <li className='py-[10px] text-[#6D6D6D] hover:text-[#000]'><Link to="/shop" className='flex gap-3 items-center'>$30.00 - $39.99</Link></li>
          <li className='py-[10px] text-[#6D6D6D] hover:text-[#000]'><Link to="/shop" className='flex gap-3 items-center'>$40.00 - Above</Link></li>
        </ul>
      </div>
      <div className="w-[83%] p-[10px]">
        <div className="heading bg-[#ededed] flex items-center p-[10px]">
          <div className="icon w-1/2 flex gap-3">
            <div className="p-[16px] hover:bg-[#000] hover:text-[#fff] duration-[1s]">
              <IoGridSharp/> 
            </div>
            <div className="p-[16px] hover:bg-[#000] hover:text-[#fff] duration-[1s]">
              <FaThList/>
            </div>
          </div>
          <div className="search w-1/2 flex justify-between">
            <div className="opt w-[48%] flex justify-end gap-3">
              <label htmlFor="cate">Sort By</label>
              <select name="cate" id="cate" className='w-[70%]  '>
                <option value="value1" className='text-right'>Sort 1</option>
                <option value="value2" className='text-right'>Sort 2</option>
                <option value="value3" className='text-right'>Sort 3</option>
                <option value="value4" className='text-right'>Sort 4</option>
                <option value="value5" className='text-right'>Sort 5</option>
              </select>
            </div>
            <div className="opt w-[48%] flex justify-end gap-3">
              <label htmlFor="cateTwo">Show</label>
              <select name="cateTwo" id="cateTwo" className='w-[70%]'>
                <option value="value1" className='text-right'>10</option>
                <option value="value2" className='text-right'>20</option>
                <option value="value3" className='text-right'>30</option>
                <option value="value4" className='text-right'>40</option>
                <option value="value5" className='text-right'>50</option>
              </select>
            </div>
          </div>
        </div>
        <div className="products flex flex-wrap justify-between">
          {data.map((f)=>(
              <div className="!w-[24%] bg-[#f2f2f2] p-[20px] my-[10px]">
                <div className="thumb relative group">
                    <Link to={`${f.id}`}>
                      <img src={f.thumbnail} alt="thumb"/>
                    </Link>
                    <div className="w-[80px] text-center absolute top-0 left-0 py-[5px] bg-[#000] text-[#fff]">
                        <p>{Math.floor(f.discountPercentage)}% Off</p>
                    </div>
                    <div className="absolute bottom-0 right-0 bg-[#fff] w-full opacity-0 group-hover:opacity-100 duration-[1s] m-[10px]">
                        <ul>
                            <li className='flex justify-end items-center gap-2 py-[10px]'>
                                <p>Add to Wish List</p>
                                <FaHeart/>
                            </li>
                            <li className='flex justify-end items-center gap-2 py-[10px]'>
                                <p>Compare</p>
                                <FaCodeCompare/>
                            </li>
                            <li className='flex justify-end items-center gap-2 py-[10px]'>
                                <p>Add to Cart</p>
                                <FaCartPlus/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <p className='font-bold text-[16px]'>{f.title}</p>
                    <p>${f.price}</p>
                </div>
                <p>Warranty: {f.warrantyInformation}</p>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shop