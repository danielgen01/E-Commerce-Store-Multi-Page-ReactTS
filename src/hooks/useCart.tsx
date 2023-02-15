import React, {useState} from 'react'

const useCart = () => {
    
    const [isCartOpen,setIsCartOpen] = useState<boolean>(true);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

  return {
    isCartOpen,
    toggleCart
    
  };
};

export default useCart