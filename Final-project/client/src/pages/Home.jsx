import React from 'react'

import { useState,useEffect } from 'react';
import axios from 'axios';
import Coursecard from '../components/Coursecard';
import { useAuth } from '../context/AuthContext';
const Home = () => {
    const [courses,setCourses] = useState([]);
    const {token,user} = useAuth();

    const fetchcourses = async ()=>{
        try {
            const res = await axios.get("http://localhost:5600/api/courses");
            setCourses(res.data.data);
        } catch(err){
            console.log(err);
        };
        
    }
    useEffect(()=>{
            fetchcourses();
        },[]);

  return <>

  <div>
          <h1>All courses</h1>
          {
              user && (
                  <p className='text-center mb-6 text-gray-700'>
                      Login Role:{user.role}
                  </p>
              )
          }
  </div>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
   
    {
        courses.map(x=>(
            <Coursecard
            key={x._id}
            course={x}
            
            />
        ))
    }
  </div>
  
  </>
}

export default Home