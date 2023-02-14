import React, { useState } from 'react'
import "./Cart.css"



const Cart:React.FC = () => {

    const [isCartOpen,setIsCartOpen] = useState<boolean>(false);

    const handleCartIconClick = () => {
        setIsCartOpen(!isCartOpen);
    }


  return (
    <div className='Cart' >
     <div className='cart-background'>
        <div className='cart-box'>
         <div className='cart-content'>
            <h2 style={{textAlign:"center"}}>Cart</h2>
         </div>

        </div>
     </div>
    </div>
  )
}

export default Cart