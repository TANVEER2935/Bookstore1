import React from 'react'
import Home from './screens/Home'
import Course from './Component/Course'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Singup from './Component/Singup';
import toast, { Toaster } from 'react-hot-toast';
export default function App() {
  return (
    <>
   <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/course" element={<Course/>}></Route>
        <Route exact path='/signup' element={<Singup/>}></Route>
    </Routes>
    </BrowserRouter>
    <Toaster/>
   </>
  )
}
 