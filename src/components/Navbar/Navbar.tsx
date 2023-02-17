import React, { useState } from 'react'
import './Navbar.css'
import {Link,NavLink} from "react-router-dom" ;
import { type } from '@testing-library/user-event/dist/type';

type NavbarProps = {
  toggleCart: () => void;
  toggleSearchbar: () => void;
  isSearchbarOpen:any;
  cartItems:any
}




const Navbar:React.FC<NavbarProps> = ({ toggleCart, toggleSearchbar, isSearchbarOpen, cartItems }) => {

  
  
    return (
    <>
    <div className='Navbar'>
      <NavLink to="/" className="nav-links" id='Homepage-Link'>Home</NavLink>
      <NavLink to="/shop" className="nav-links" id='Shop-Link'>Shop</NavLink>
      <NavLink to="/contact" className="nav-links" id='Contact-Link'>Contact</NavLink>
      <div className='top-page-search-ctn' style={{display:isSearchbarOpen? "flex" : "none"}}>
      <input type="text"
      className='search-input-field'
      placeholder='Wonach suchst du ...?'
      />
      </div>
      <div className='nav-icons-ctn'>
      <i className='bx bx-search' title='search' onClick={toggleSearchbar}></i>
      <i className='bx bxs-shopping-bag' onClick={toggleCart}></i>
      <h3 id='cart-count-number'>{cartItems.length}</h3>
      </div>
      
    </div>
  </>)
}

export default Navbar