import React from 'react'
import Navbar from '../Component/Navbar'
import Banner from '../Component/Banner'
import Footer from '../Component/Footer'
import Card from '../Component/Card'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Singup from '../Component/Singup'

export default function Home() {
  return (
    <>
        <Navbar/>
        <Banner></Banner>
        <Card></Card>
        <Footer/>
        
    </>
      )
}
