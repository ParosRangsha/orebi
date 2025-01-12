import React, { useEffect, useState } from 'react'
import product from "../assets/pro.png"
import axios from 'axios'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import { FaArrowLeft, FaArrowRight, FaHeart, FaCartPlus } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";





function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)', padding: '16px', borderRadius: '50%', backgroundColor: '#d7d7d7', zIndex: '2'}}
        onClick={onClick}
      ><FaArrowRight/> </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)', padding: '16px', borderRadius: '50%', backgroundColor: '#d7d7d7', zIndex: '2'}}
        onClick={onClick}
      ><FaArrowLeft/></div>
    );
  }

const Arrivals = () => {
    let [data, setData] = useState([])
    let getData = ()=>{
        axios.get('https://dummyjson.com/products').then((response)=>{
            setData(response.data.products);
            
        })
    }
    useEffect(()=>{
        getData()
    },[])
    let settingsArrival = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };    
  return (
    <div className='max-w-container mx-auto py-[50px]'>
        <h2 className='text-[39px] font-bold'>New Arrivals</h2>
        <div className="">
            <Slider {...settingsArrival}>
                {data.map((e)=>(
                    <div className="!w-[95%] bg-[#f2f2f2] p-[20px]">
                        <div className="thumb relative group">
                            <img src={e.images[0]} alt="" className='w-full h-[280px]'/>
                            <div className="w-[80px] text-center absolute top-0 left-0 py-[5px] bg-[#000] text-[#fff]">
                                <p>{Math.floor(e.discountPercentage)}% Off</p>
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
                            <p className='font-bold text-[16px]'>{e.title}</p>
                            <p>$44.00</p>
                        </div>
                        <p>Black</p>
                    </div>
                ))}
            </Slider>
            
        </div>
    </div>
  )
}

export default Arrivals