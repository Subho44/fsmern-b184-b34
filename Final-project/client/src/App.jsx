import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Addcourse from './pages/Addcourse'
import Viewcourse from './pages/Viewcourse'
import Editcourse from './pages/Editcourse'
import {useAuth} from "./context/AuthContext";
import Register from './pages/Register'
import Login from './pages/Login'

function AdminRoute({children}){
  const {user} = useAuth();

  if(!user){
    return <Navigate to="/login" />;
  }
  if(user.role !=="admin"){
    return <Navigate to="/" />;
  }
  return children;
}
const App = () => {

  return <>

  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/add' element={
    <AdminRoute>
      <Addcourse/>
    </AdminRoute>
  }></Route>
  <Route path='/register' element={<Register />}></Route>
  <Route path='/login' element={<Login />}></Route>
  <Route path='/view/:id' element={<Viewcourse/>}></Route>
  <Route path='/edit/:id' element={
    <AdminRoute>
      <Editcourse/>
    </AdminRoute>
  }></Route>
  </Routes>
  
  <Footer/>
  </BrowserRouter>
  
  </>
}

export default App