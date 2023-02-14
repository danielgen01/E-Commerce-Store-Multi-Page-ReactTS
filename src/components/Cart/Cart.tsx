import React, { useState } from 'react'
import "./Cart.css"
import useCart from '../../hooks/useCart';



const Cart:React.FC = () => {

    const {isCartOpen,toggleCart} = useCart();

   


  return (
    <div className='Cart' style={{display: isCartOpen? "block" : "none"}}>
     <div className='cart-background'>
        <div className='cart-box'>
         <div className='cart-content'>
            <h2 style={{textAlign:"center"}}>Cart</h2>
            <i className='bx bx-x' onClick={toggleCart}></i>
         </div>

        </div>
     </div>
    </div>
  )
}

export default Cart