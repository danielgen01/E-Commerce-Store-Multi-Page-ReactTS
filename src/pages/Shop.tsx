import React, {useState} from 'react'
import Main from '../components/Main/Main'
import CartAddBox from '../components/CartAddBox/CartAddBox';
import { StringMappingType } from 'typescript';


const Shop = () => {
  const [isCartAddContainerOpen,setIsCartContainerOpen] = useState<boolean>(false);
  const [quantity,setQuantity] = useState(1);
  
 
  const handleMinusClick = () => {
    if (quantity > 1) {
      setQuantity(quantity -1);
    }
  }

  const handlePlusClick = () => {
    if(quantity < 10){
    setQuantity(quantity + 1);
    }else{
      alert('max quantity reached ')
    }
  }

  const toggleCartAddContainer = () => {

    setIsCartContainerOpen(!isCartAddContainerOpen);
    setQuantity(1);

    if (!isCartAddContainerOpen) {
      document.body.style.overflow = 'hidden'; // Scrollen auf der Seite deaktivieren
    } else {
      document.body.style.overflow = 'auto'; // Scrollen auf der Seite aktivieren
    }
  }


  return (
    <>
    <h1 style={{textAlign:"center"}}>Shop items</h1>

    <Main 
  isCartAddContainerOpen={isCartAddContainerOpen}
  toggleCartAddContainer={toggleCartAddContainer}
  />
  <CartAddBox
   isCartAddContainerOpen={isCartAddContainerOpen}
   toggleCartAddContainer={toggleCartAddContainer}
   quantity={quantity}
   handleMinusClick ={handleMinusClick}
   handlePlusClick ={handlePlusClick}
   

   
  />
      
    </>
  )
}

export default Shop