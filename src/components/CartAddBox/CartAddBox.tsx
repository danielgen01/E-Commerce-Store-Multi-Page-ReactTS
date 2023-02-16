import React from 'react'
import "./CartAddBox.css"

type CartAddBoxProps = {
    toggleCartAddContainer: () => void;
    isCartAddContainerOpen:boolean;
    handlePlusClick: () => void;
    handleMinusClick: () => void;
    quantity:number;
    selectedItem:any
  }



const CartAddBox:React.FC<CartAddBoxProps> = (
    { toggleCartAddContainer,isCartAddContainerOpen,
        handlePlusClick, handleMinusClick, quantity,
        selectedItem
        
    
    }
    
    ) => {

  return (
    <>


    {/* CART ADD CONTAINER */}
    <div className='cart-add-ctn' style={{display: isCartAddContainerOpen? "block" : "none"}}>
    <div className='cart-add-box'>
    <i className='bx bx-x'  onClick={toggleCartAddContainer} id="close-add-cart-box-icon"/>
    <div className='cart-add-box-content'>
     <div className='img-ctn col-6 col-s-6'>
    <img src={selectedItem.image} style={{width:"70%",height:"auto"}}/>
    </div>
    <div className='product-infos-ctn '>
        <h1>{selectedItem.title}</h1>
        <h3>{selectedItem.price}</h3>
        <input type="number" 
        defaultValue={1}
        className="input-field-product-quantity"
        readOnly={true}
        value={quantity}
        min="1"
        max="9"
        />
        <div className='plus-minus-icons-ctn'>
         <i className='bx bxs-minus-square' onClick={handleMinusClick}></i>
         <i className='bx bxs-plus-square' onClick={handlePlusClick}></i> 
         </div>
         <i className='bx bx-cart-add' />
    </div>
    </div>
    </div>

    </div>

    </>
  )
}

export default CartAddBox