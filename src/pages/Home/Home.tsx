import React from 'react'
import "./Home.css";


const Home = () => {
  
  return (
    <>
    <div className='Home'>
      <h1 style={{color:"white",textAlign:"center",fontSize:"2.2rem"}}>Check out our brandnew iPhones</h1>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"1%"}}>
      <a href='/shop' style={{color:"#2997ff",fontSize:"2rem",textDecoration:"none"}}>Go shopping </a>
      <i className='bx bxs-chevron-right' style={{fontSize:"2rem",color:"#2997ff"}}></i>
      </div>
    </div>
   

    </>
  )
}

export default Home