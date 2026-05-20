import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Addcourse from './pages/Addcourse'
import Viewcourse from './pages/Viewcourse'
import Editcourse from './pages/Editcourse'
const App = () => {

  return <>

  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/add' element={<Addcourse/>}></Route>
  <Route path='/view/:id' element={<Viewcourse/>}></Route>
  <Route path='/edit/:id' element={<Editcourse/>}></Route>
  </Routes>
  
  <Footer/>
  </BrowserRouter>
  
  </>
}

export default App