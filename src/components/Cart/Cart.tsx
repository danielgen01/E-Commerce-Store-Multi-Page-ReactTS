import { type } from 'os'
import React, { useState } from 'react'
import "./Cart.css"

type CartProps = {
  isCartOpen: boolean;
  toggleCart: () => void;
}



const Cart:React.FC<CartProps> = ({ isCartOpen, toggleCart }) => {


  return (
    <div className='Cart' style={{display: isCartOpen? "block" : "none"}}>
     <div className='cart-background'>
        <div className='cart-box'>
         <div className='cart-content'>
            <h2 style={{textAlign:"center"}}>Cart</h2>
            <i className='bx bx-x' id='close-cart-icon' onClick={toggleCart}></i>
         </div>

        </div>
     </div>
    </div>
  )
}

export default Cart