import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import HeadNav from './HeadNav'

const Layout = () => {
  return (
    <>
        <HeadNav/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout