import { type } from 'os'
import React, { useState } from 'react'
import "./Cart.css"


type CartItem = {
  title: string;
  price: number;
  quantity: number;
  image: string;
}



type CartProps = {
  isCartOpen: boolean;
  toggleCart: () => void;
  cartItems:CartItem[] ;
  
}


const Cart:React.FC<CartProps> = ({ isCartOpen, toggleCart, cartItems }) => {


  return (
    <div className='Cart' style={{display: isCartOpen? "block" : "none"}}>
     <div className='cart-background'>
        <div className='cart-box'>
         <div className='cart-content'>
            <h2 style={{textAlign:"center"}}>Cart</h2>
            <i className='bx bx-x' id='close-cart-icon' onClick={toggleCart}></i>
            
            {/* Rendering empty cart content */}
            {cartItems.length <= 0 &&
              <>
              <div className='empty-cart-content'>
              <i className='bx bx-cart' id='empty-cart-icon'></i>
              <h2>No items in cart</h2>
              <button className='continue-shopping-btn' 
                onClick={toggleCart}
              >CONTINUE SHOPPING</button>
              </div>
              </>}

              {cartItems.length > 0 &&
              <>
              
                {cartItems.map((item:any)=> (
                  <div key={item} className="added-cart-item-row">
                    <div className='item-title-and-img'
                     style={{display:"flex",flexDirection:"column"}}>
                    <img src={item.image} id="in-cart-product-img"/>
                    <h4>{item.title}</h4>
                    </div>
                    <input type="number"
                    defaultValue={item.quantity}
                    min="1"
                    max="10"
                    style={{width:"3rem",textAlign:"center"}}
                    />
                    <h4>{item.price}</h4>
                    </div>
                ))}
                
              
              </> }

         </div>

        </div>
     </div>
    </div>
  )
}

export default Cart