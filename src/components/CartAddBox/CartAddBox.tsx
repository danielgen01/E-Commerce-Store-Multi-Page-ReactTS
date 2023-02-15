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
     <div className='img-ctn col-6 col-s-6'>
    <img src='https://files.refurbed.com/ii/iphone-12-1607327724.jpg?t=resize&h=300&w=300' />
    </div>
    <div className='product-infos-ctn'>
        <h1>iPhone 12</h1>
        <h3>699€</h3>
        <input type="number" 
        defaultValue={1}
        className="input-field-product-quantity"
        readOnly={true}
        />
        <div className='plus-minus-icons-ctn'>
         <i className='bx bxs-plus-square'></i> 
         <i className='bx bxs-minus-square' ></i>
         </div>
    </div>
    </div>
    </div>

    </div>

    </>
  )
}

export default CartAddBox