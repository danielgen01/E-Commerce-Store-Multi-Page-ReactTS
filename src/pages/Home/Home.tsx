import React from 'react'
import "./Home.css";
import { Link } from 'react-router-dom';


const Home = () => {
  
  return (
    <>
    <div className='Home'>
      <h1 style={{color:"white",textAlign:"center",fontSize:"2.2rem",paddingTop:"2%"}}>Check out our brandnew iPhones</h1>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"1%"}}>
      <Link to="/shop" style={{color:"#2997ff",fontSize:"2rem",textDecoration:"none",display:"flex",alignItems:"center"}}>Go Shopping
      <i className='bx bxs-chevron-right' style={{fontSize:"2rem",color:"#2997ff"}}></i>
      </Link>
      </div>
    </div>
   

    </>
  )
}

export default Home