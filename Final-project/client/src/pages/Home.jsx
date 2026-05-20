import React from 'react'

import { useState,useEffect } from 'react';
import axios from 'axios';
import Coursecard from '../components/Coursecard';

const Home = () => {
    const [courses,setCourses] = useState([]);
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