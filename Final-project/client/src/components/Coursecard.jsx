import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
const Coursecard = ({course}) => {
  const {user} = useAuth();
  return <>
  <div className='bg-white rounded-lg shadow p-5 mt-5 hover:shadow-xl transition'>
    <h2 className='text-2xl font-bold mb-2'>{course.title}</h2>
    <h3 className='text-green-600 text-xl font-semibold mb-4'>₹ {course.price}</h3>
    <div className='flex flex-wrap gap-3'>
        <Link to={`/view/${course._id}`} className='bg-yellow-500 text-white px-3 py-2 rounded'>View</Link>
        {user?.role ==="admin" && (
          <>
            <Link to={`/edit/${course._id}`} className='bg-red-500 text-white px-3 py-2 rounded'>Edit</Link>
          </>
        )}
       
        
    </div>
  </div>
  
  
  </>
}

export default Coursecard