import React, { useState } from 'react'
import './Navbar.css'
import {Link,NavLink} from "react-router-dom" ;

const Navbar:React.FC = () => {

  const [isSearchIconClicked,setIsSearchIconClicked] = useState<boolean>(false);

  const handleSearchIconClick = () =>{
    setIsSearchIconClicked(!isSearchIconClicked);
  }
    return (
    <>
    <div className='Navbar'>
      <NavLink to="/" className="nav-links" id='Homepage-Link'>Home</NavLink>
      <NavLink to="/shop" className="nav-links" id='Shop-Link'>Shop</NavLink>
      <NavLink to="/about" className="nav-links" id='About-Link'>About</NavLink>
      <NavLink to="/contact" className="nav-links" id='Contact-Link'>Contact</NavLink>
      <input type="text"
      className='search-input-field'
      placeholder='Wonach suchst du ...?'
      style={{display:isSearchIconClicked? "block" : "none"}}
      />
      <div className='nav-icons-ctn'>
      <i className='bx bx-search' title='search' onClick={handleSearchIconClick}></i>
      <i className='bx bxs-shopping-bag'></i>
      </div>
    </div>
  </>)
}

export default Navbar