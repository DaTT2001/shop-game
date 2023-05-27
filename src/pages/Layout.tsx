import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import Carts from './Carts/Carts'

const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet />
        <Footer/>
        <Carts/>
    </>
  )
}

export default Layout