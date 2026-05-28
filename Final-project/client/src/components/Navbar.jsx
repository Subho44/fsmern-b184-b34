import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {useAuth} from "../context/AuthContext";
const Navbar = () => {
  const {user,logout} = useAuth();
  const navigate = useNavigate();

  const hl = ()=>{
    logout();
    navigate("/login");
  }

  return <>
  <div className='bg-blue-600 shadow'>
    <div className='flex justify-between items-center p-4'>
        <Link to="/" className='text-white text-2xl font-bold'>E-learn</Link>
        <div className='flex gap-3'>
            <Link to="/" className='text-white hover:text-blue-300'>Home</Link>
            {user?.role ==="admin" &&(
            <Link to="/add" className='text-white hover:text-blue-300'>AddCourse</Link>
            )}

            {!user ? (
              <>
              <Link to="/login" className='text-white hover:text-blue-300'>Login</Link>
              <Link to="/register" className='text-white hover:text-blue-300'>Register</Link>
              
              
              </>
            ): (
              <>
              <span className='bg-white px-4 py-2 rounded'>
                {user.name} - {user.role}
              </span>
              <button
              onClick={hl}
              className='bg-red-500 text-white px-4 py-2 rounded'
              >
              Logout
              </button>
              
              </>
            )}
            

        </div>
    </div>
  </div>

  
  
  </>
}

export default Navbar