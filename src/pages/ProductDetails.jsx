import React, { useContext, useEffect, useState } from 'react'
import { ApiData, MyApi } from '../components/MyApi'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const ProductDetails = () => {
    let targetID = useParams();
    let [singleID, setSingleID] = useState({})
    let getData = ()=>{
      axios.get(`https://dummyjson.com/products/${targetID.id}`).then((response)=>{
        setSingleID(response.data)
      });
    };
    useEffect(()=>{
      getData()
    },[])
  return (
    <div className="max-w-container mx-auto my-[50px]">
      <div className="thumb flex justify-center items-center h-[40vh]">
        <img src={singleID.thumbnail} alt="" className='hover:scale-[250%] duration-[1s] hover:z-[999] hover:bg-[yellow] hover:fixed hover:top-[50%] hover:translate-y-[-50%]'/>
      </div>
      <h2 className='font-bold text-[30px]'>{singleID.title}</h2>
      <div className="price flex items-center gap-3">
        <p><span className='font-bold'>Price: </span></p>
        <p><del>{Math.floor(Math.floor(singleID.price / 100 * singleID.discountPercentage) + singleID.price)}.00$</del></p>
        <p className='font-bold text-[25px]'>{singleID.price}$</p>
        <p> with {Math.floor(singleID.discountPercentage)}% discount</p>
      </div>
      <div className="Details">
        <p><span className='font-bold'>Rating: </span>{singleID.rating} of 5.00</p>
        <p><span className='font-bold'>Stock: </span>{singleID.stock} pieces.</p>
      </div>
      <div className="color flex items-center gap-3">
        <p><span className='font-bold'>Color: </span></p>
        <div className="item flex gap-2 items-center">
          <div className="clr bg-[red] h-[20px] w-[20px] rounded-[50%] hover:scale-[120%] duration-[0.5s] cursor-pointer"></div>
          <div className="clr bg-[green] h-[20px] w-[20px] rounded-[50%] hover:scale-[120%] duratio-[0.5s] cursor-pointer"></div>
          <div className="clr bg-[blue] h-[20px] w-[20px] rounded-[50%] hover:scale-[120%] duration-[0.5s] cursor-pointer"></div>
          <div className="clr bg-[Yellow] h-[20px] w-[20px] rounded-[50%] hover:scale-[120%] duratio-[0.5s] cursor-pointer"></div>
          <div className="clr bg-[grey] h-[20px] w-[20px] rounded-[50%] hover:scale-[120%] duration-[0.5s] cursor-pointer"></div>
          <div className="clr bg-[olive] h-[20px] w-[20px] rounded-[50%] hover:scale-[120%] duration-[0.5s] cursor-pointer"></div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <p><span className='font-bold'>Size: </span></p>
        <select name="size" id="size" className='border-[1px] p-[5px] m-[5px]'>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
    </div>
  )
}

export default ProductDetails