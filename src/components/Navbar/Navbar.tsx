import React from 'react'
import './Navbar.css'
import {Link,NavLink} from "react-router-dom" ;

const Navbar:React.FC = () => {
  return (
    <>
    <div className='Navbar'>
      <NavLink to="/" className="nav-links" id='Homepage-Link'>Home</NavLink>
      <NavLink to="/shop" className="nav-links" id='Shop-Link'>Shop</NavLink>
      <NavLink to="/about" className="nav-links" id='About-Link'>About</NavLink>
      <NavLink to="/contact" className="nav-links" id='Contact-Link'>Contact</NavLink>
      <i className='bx bxs-shopping-bag' id='cart-icon'></i>
    </div>
  </>)
}

export default Navbar