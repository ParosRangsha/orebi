import React from 'react'
import Navbar from './Navbar'
import Header from './Header'

const HeadNav = () => {
  return (
    <div className="headnav w-full sticky left-0 top-0">
        <Navbar/>
        <Header/>
    </div>
  )
}

export default HeadNav