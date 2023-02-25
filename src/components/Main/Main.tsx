import React from 'react'
import './Main.css'
import products from "../products.json"

type MainProps = {
  toggleCartAddContainer: () => void;
  isCartAddContainerOpen:boolean;
  handleAddCartIconClickShop:any
}

interface Item {
  name:string,
  price:number,
  imageSrc:string,
  id: number
}

const Main:React.FC<MainProps> = ({toggleCartAddContainer,
   isCartAddContainerOpen, handleAddCartIconClickShop}) => {

    const productList = products.map((product: Item) => (
      <div className='item-ctn col-s-6 col-4' key={product.id}>
        <h2>{product.name}</h2>
        <img src={product.imageSrc} 
        className='product-img' />
        <h2>{product.price}€</h2>
        <i className='bx bx-cart-add' onClick={handleAddCartIconClickShop}></i>
      </div>
    ));
   
  

  return <div className='shop-items-ctn'>{productList}</div>
  
};
    export default Main;
