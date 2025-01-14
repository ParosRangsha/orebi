import React, { useState } from 'react'
import cartsample from '../assets/cartsample.png'
import { ImCross } from "react-icons/im";
import { TfiArrowCircleUp, TfiArrowCircleDown } from "react-icons/tfi";
import { Link } from 'react-router-dom';




const Cart = () => {
  let [val, setVal] = useState(1);
  let [pro, setPro] = useState(80)
  return (
    <div className="cart py-[50px]">
      <div className="max-w-container mx-auto">
        <h2 className='text-[40px] font-bold'>Cart</h2>
        <div className="heading w-full bg-[#F5F7F7]">
          <ul className='flex p-[10px] justify-between'>
            <li className='w-[20%] font-bold p-[10px]'>Product</li>
            <li className='w-[20%] font-bold p-[10px]'>Price</li>
            <li className='w-[20%] font-bold p-[10px]'>Quantity</li>
            <li className='w-[20%] font-bold p-[10px]'>Total</li>
          </ul>
          <ul className='flex p-[10px] items-center justify-between'>
            <li className='w-[20%] font-bold p-[10px] flex justify-between items-center'>
              <div className="cross w-[10%]">
                <ImCross/>
              </div>
              <div className="thumb w-[20%]">
                <img src={cartsample} alt="sample" className='w-full'/>
              </div>
              <h2 className='w-[65%]'>Product Name</h2>
            </li>
            <li className='w-[20%] font-bold p-[10px]'>{pro}</li>
            <li className='w-[20%] font-bold p-[10px] relative'>
              <h2 className='text-right px-[20px]'>{val}</h2>
              <div className="arrows flex flex-col absolute top-[50%] right-0 translate-y-[-50%]">
                <TfiArrowCircleUp onClick={()=>{setVal(val + 1)}}/>
                <TfiArrowCircleDown onClick={()=>{val>0 && setVal(val - 1)}}/>
              </div>
            </li>
            <li className='w-[20%] font-bold p-[10px]'>${pro * val}</li>
          </ul>
        </div>
        <div className="total flex justify-end py-[50px] flex-col items-end">
          <ul className='w-[20%]'>
            <li className='flex gap-3 justify-between'><h2>Subtotal</h2> <h2>{pro * val}$</h2></li>
            <li className='flex gap-3 justify-between'><h2>Total</h2> <h2>{pro * val}$</h2></li>
          </ul>
        <Link to='/' className='py-[16px] px-[24px] bg-[#000] text-[#fff] font-bold my-[20px]'>Proceed to Checkout</Link>
        </div>
      </div>
    </div>
  )
}

export default Cart