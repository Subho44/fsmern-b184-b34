import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Offer from "./components/Offer";

function App() {
 
  return <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/product" element={<Products/>}></Route>
    <Route path="/offer" element={<Offer/>}></Route>
  </Routes>
  
  <Footer/>
  </BrowserRouter>
  
  
  </>
}

export default App;