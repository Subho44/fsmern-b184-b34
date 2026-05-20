import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

  return <>
  <div className='bg-blue-600 shadow'>
    <div className='flex justify-between items-center p-4'>
        <Link to="/" className='text-white text-2xl font-bold'>E-learn</Link>
        <div className='flex gap-3'>
            <Link to="/" className='text-white hover:text-blue-300'>Home</Link>
            <Link to="/add" className='text-white hover:text-blue-300'>AddCourse</Link>
        </div>
    </div>
  </div>

  
  
  </>
}

export default Navbar