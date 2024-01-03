import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import './App.css'
function Layout() {
  return (
    <>
    <Header header="header" />
    <Outlet />
    <Footer></Footer>
    </>
  )
}

export default Layout