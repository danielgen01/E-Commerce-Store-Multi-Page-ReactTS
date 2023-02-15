import React, {useState} from 'react'
import Main from '../components/Main/Main'
import CartAddBox from '../components/CartAddBox/CartAddBox';

const Shop = () => {
  const [isCartAddContainerOpen,setIsCartContainerOpen] = useState<boolean>(false);


  const toggleCartAddContainer = () => {

    setIsCartContainerOpen(!isCartAddContainerOpen);
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
  />
      
    </>
  )
}

export default Shop