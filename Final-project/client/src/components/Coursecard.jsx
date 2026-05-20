import React from 'react'
import { Link } from 'react-router-dom'

const Coursecard = ({course}) => {

  return <>
  <div>
    <h2>{course.title}</h2>
    <h3>₹ {course.price}</h3>
    <div>
        <Link to={`/view/${course._id}`}>View</Link>
        <Link to={`/edit/${course._id}`}>Edit</Link>
        
    </div>
  </div>
  
  
  </>
}

export default Coursecard