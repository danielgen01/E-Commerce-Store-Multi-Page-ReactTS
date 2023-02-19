import React, { useState } from 'react'
import './Navbar.css'
import {Link,NavLink} from "react-router-dom" ;
import { type } from '@testing-library/user-event/dist/type';

type NavbarProps = {
  toggleCart: () => void;
  toggleSearchbar: () => void;
  isSearchbarOpen:boolean;
  cartCount:number;
  cartItems:any;
  isTouchNavbarOpen:boolean;
  setIsTouchNavbarOpen:any;
  toggleTouchNavbar: () => void;

}




const Navbar:React.FC<NavbarProps> = ({ toggleCart, toggleSearchbar, isSearchbarOpen, cartCount,cartItems,isTouchNavbarOpen,setIsTouchNavbarOpen,toggleTouchNavbar}) => {

  
  
    return (
    <>
    <div className='Navbar'>
      <div className='desktop-nav-links'>
      <NavLink to="/" className="nav-links" id='Homepage-Link'>Home</NavLink>
      <NavLink to="/shop" className="nav-links" id='Shop-Link'>Shop</NavLink>
      <NavLink to="/contact" className="nav-links" id='Contact-Link'>Contact</NavLink>
      </div>
      <div className='touch-devices-nav-links'>
        {!isTouchNavbarOpen && 
        <>
        <i className='bx bx-menu' id='menu-icon' onClick={toggleTouchNavbar}></i>
        </>
        }
      {isTouchNavbarOpen &&
      <>
      <i className='bx bx-x' id='close-menu-icon' onClick={toggleTouchNavbar}></i>
      </>}
      
      </div>
      <div className='top-page-search-ctn' style={{display:isSearchbarOpen? "flex" : "none"}}>
      <input type="text"
      className='search-input-field'
      placeholder='Wonach suchst du ...?'
      />
      </div>
      <div className='nav-icons-ctn'>
      <i className='bx bx-search' title='search' onClick={toggleSearchbar}></i>
      <i className='bx bxs-shopping-bag' onClick={toggleCart}></i>
      <h3 id='cart-count-number'>{cartCount}</h3>
      </div>
      
    </div>
  </>)
}

export default Navbar