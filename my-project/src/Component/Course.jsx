import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Coures1 from './Coures1'
import axios from 'axios'
import { Link } from 'react-router-dom';
export default function Course() {
  const[course,setcourse]=useState([]);
  useEffect(()=>{
    const getcourse=async()=>{
      try{const res=await axios.get("http://localhost:4000/course");
        console.log(res.data);
        setcourse(res.data);
      }
      catch(err){
        console.log(err);
      }
      };
      getcourse();
  },[])
  return (
    <div>
      <Navbar/>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div className='mt-28 item-center justify-center text-center '>
        <h1 className='text-5xl font-bold'>We're delight to {" "}<span className='text-pink-500 font-bold'>{"("}here!</span></h1>
        <p className='font-semibold text-2xl mt-5  md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta natus, eaque veniam voluptate quia, ipsum commodi cupiditate quae sit impedit molestias ut. Quod voluptates blanditiis mollitia, minus id impedit!</p>
        <button className="btn btn-secondary mt-3 font-bold text-xl"><Link to='/'>Back</Link></button>
        <hr className='mt-3'/>
      </div>
      <div className='grid grid-cols-3 gap-4 mt-8'>
      {course.map((item)=>(
        <Coures1 item={item} key={item.id}/>
       ))}
      </div>
      </div>
      <Footer/>
    </div>
  )
}
