import React from 'react'
import bann from '../assets/banner.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import { Link } from 'react-router-dom';

const Banner = () => {
    let settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className='z-[1]'>
        <Slider {...settings}>
            <Link to=''><img src={bann} alt="banner" className='w-full'/></Link>
            <Link to=''><img src={bann} alt="banner" className='w-full'/></Link>
            <Link to=''><img src={bann} alt="banner" className='w-full'/></Link>
            <Link to=''><img src={bann} alt="banner" className='w-full'/></Link>
            <Link to=''><img src={bann} alt="banner" className='w-full'/></Link>
            <Link to=''><img src={bann} alt="banner" className='w-full'/></Link>
            <Link to=''><img src={bann} alt="banner" className='w-full'/></Link>
        </Slider>
    </div>
  )
}

export default Banner