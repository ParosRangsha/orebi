import React from 'react'
import Navbar from './Navbar'
import Header from './Header'

const HeadNav = () => {
  return (
    <div className="headnav w-full sticky left-0 top-0 z-50 bg-[#ddd]">
        <Navbar/>
        <Header/>
    </div>
  )
}

export default HeadNav