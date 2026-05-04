import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

  return <>
  <header className="header">
        <nav className="navbar">
          <h1 className="logo">Shop</h1>

          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Products</Link></li>
            <li><Link to="/offer">Offers</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <button className="cart-btn">Cart 🛒</button>
        </nav>
      </header> 
  </>
}

export default Navbar