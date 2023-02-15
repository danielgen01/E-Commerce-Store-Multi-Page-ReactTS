import React, {useState} from 'react'
import Main from '../components/Main/Main'

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
      
    </>
  )
}

export default Shop