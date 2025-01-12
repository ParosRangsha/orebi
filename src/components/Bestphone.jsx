import React from 'react'
import bestphone from '../assets/ads4.png'
import { Link } from 'react-router-dom'

const Bestphone = () => {
  return (
    <div className="max-w-container mx-auto my-[50px]">
        <Link to='/'>
            <img src={bestphone} alt="best Phone" />
        </Link>
    </div>
  )
}

export default Bestphone