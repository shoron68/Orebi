import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Catagory from './Catagory'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
    <Nav/>
    <Catagory/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout