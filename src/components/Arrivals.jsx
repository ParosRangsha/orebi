import React, { useEffect, useState } from 'react'
import product from "../assets/pro.png"
import axios from 'axios'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

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
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };    
  return (
    <div className='max-w-container mx-auto py-[50px]'>
        <h2 className='text-[39px] font-bold'>New Arrivals</h2>
        <div className="">
            <Slider {...settingsArrival}>
                {data.map((e)=>(
                    <div className="!w-[95%]">
                        <img src={e.images} alt="" className='w-full'/>
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