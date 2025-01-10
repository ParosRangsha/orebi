import React from 'react'
import adsOne from '../assets/ads1.png'
import adsTwo from '../assets/ads2.png'
import adsThree from '../assets/ads3.png'
import { Link } from 'react-router-dom'

const Ads = () => {
  return (
    <div className='py-[50px] w-full'>
        <div className="max-w-container mx-auto flex justify-between">
            <div className="w-[48%]">
                <Link to="/">
                    <img src={adsOne} alt="adsense" />
                </Link>
            </div>
            <div className="w-[48%] flex flex-col justify-between">
                <Link to="/">
                    <img src={adsTwo} alt="adsense" />
                </Link>
                <Link to="/">
                    <img src={adsThree} alt="adsense" />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Ads