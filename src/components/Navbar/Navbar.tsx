import React, { useState } from 'react'
import './Navbar.css'
import {Link,NavLink} from "react-router-dom" ;
import useCart from '../../hooks/useCart';
import useSearchbar from '../../hooks/useSearchbar';

const Navbar:React.FC = () => {

  const {isCartOpen,toggleCart} = useCart();
  const {isSearchIconClicked,handleSearchIconClick} = useSearchbar();
  
    return (
    <>
    <div className='Navbar'>
      <NavLink to="/" className="nav-links" id='Homepage-Link'>Home</NavLink>
      <NavLink to="/shop" className="nav-links" id='Shop-Link'>Shop</NavLink>
      <NavLink to="/about" className="nav-links" id='About-Link'>About</NavLink>
      <NavLink to="/contact" className="nav-links" id='Contact-Link'>Contact</NavLink>
      <div className='top-page-search-ctn' style={{display:isSearchIconClicked? "flex" : "none"}}>
      <input type="text"
      className='search-input-field'
      placeholder='Wonach suchst du ...?'
      />
      </div>
      <div className='nav-icons-ctn'>
      <i className='bx bx-search' title='search' onClick={handleSearchIconClick}></i>
      <i className='bx bxs-shopping-bag' onClick={toggleCart}></i>
      </div>
    </div>
  </>)
}

export default Navbar