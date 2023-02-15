import React from 'react'
import "./CartAddBox.css"

type CartAddBoxProps = {
    toggleCartAddContainer: () => void;
    isCartAddContainerOpen:boolean
  }

const CartAddBox:React.FC<CartAddBoxProps> = ({ toggleCartAddContainer,isCartAddContainerOpen }) => {
  return (
    <>


    {/* CART ADD CONTAINER */}
    <div className='cart-add-ctn' style={{display: isCartAddContainerOpen? "block" : "none"}}>
    <div className='cart-add-box'>
    <i className='bx bx-x'  onClick={toggleCartAddContainer} id="close-add-cart-box-icon"/>
    <div className='cart-add-box-content'>
      
    </div>
    </div>

    </div>

    </>
  )
}

export default CartAddBox