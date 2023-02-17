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
  setCartItems:any;
   
}


const Cart:React.FC<CartProps> = ({ isCartOpen, toggleCart, cartItems,setCartItems }) => {

  const handleMinusButtonClick = (item: CartItem) =>{
    item.quantity -=1;
    setCartItems((prevCartItems:CartItem[]) => [...prevCartItems]);
    // setCartCount(prevCount => prevCount -=1);
 }

 const handlePlusButtonClick = (item: CartItem) =>{
  if(item.quantity < 10){
    item.quantity = Number(item.quantity) + 1;
   setCartItems((prevCartItems: CartItem[] ) => [...prevCartItems]);
  }
  //  setCartCount(prevCount => prevCount +=1);
}

const handleRemoveFromCart = (index:number) =>{
  const updatedCart = cartItems.filter((item,i) => i!== index);
  setCartItems(updatedCart);
  // setCartCount(prevCount => prevCount -=1);

  }


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

                {cartItems.map((item:any,index)=> (
                  <div key={item} className="added-cart-item-row">
                    <div className='item-title-and-img'
                     style={{display:"flex",flexDirection:"column"}}>
                    <img src={item.image} id="in-cart-product-img"/>
                    <h4>{item.title}</h4>
                    </div>
                    <div className='quantity-box' style={{display:"flex",flexDirection:"column"}}>
                    <input type="number"
                    value={item.quantity}
                    min="1"
                    max="10"
                    readOnly={true}
                    id="cart-quantity-number-input-field"
                    />
                    <div className='quantity-change-buttons'>

                      {item.quantity >1 && 
                      <>
                     <i className='bx bx-minus'  id="cart-minus-icon"   onClick={() => handleMinusButtonClick(item)}></i>
                    </>
                    }
                    {item.quantity <=1  &&

                                 
                    <i className='bx bx-trash-alt' id='cart-trash-icon'
                      onClick={() => handleRemoveFromCart(index)}
                      >
                          </i>
                      }
                    <i className='bx bx-plus'  id="cart-plus-icon"  onClick={() => handlePlusButtonClick(item)}></i> 
                    </div>
                    </div>
                    <div className='prices' style={{display:"flex",flexDirection:"column"}}>
                    <h5>{item.price}</h5>
                    <h4>{item.price * item.quantity}</h4>
                    </div>
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