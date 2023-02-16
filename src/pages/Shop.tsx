import React, {useState} from 'react'
import Main from '../components/Main/Main'
import CartAddBox from '../components/CartAddBox/CartAddBox';
import { StringMappingType } from 'typescript';
import Footer from '../components/Footer/Footer';


const Shop = () => {
  const [isCartAddContainerOpen,setIsCartContainerOpen] = useState<boolean>(false);
  const [quantity,setQuantity] = useState(1);
  const [selectedItem,setSelectedItem] = useState({});
  
//  CHANGE QUANTITY IN CART ADD BOX CONTAINER
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

  // OPEN | CLOSE CART ADD BOX

  const toggleCartAddContainer = () => {

    setIsCartContainerOpen(!isCartAddContainerOpen);
    setQuantity(1);

    if (!isCartAddContainerOpen) {
      document.body.style.overflow = 'hidden'; // Scrollen auf der Seite deaktivieren
    } else {
      document.body.style.overflow = 'auto'; // Scrollen auf der Seite aktivieren
    }
  }

  // SHOW CHILDS OF CLICKED TSX ELEMENT

  function showChildElements(event: React.MouseEvent<HTMLElement>) {
    const parent:any = event.currentTarget.parentNode;
    const title:string = parent.children[0].innerHTML
    const image:any = parent.children[1].src
    const price:number = parent.children[2].innerHTML
   
    setSelectedItem({
      title: title,
      image: image,
      price: price

    })
    console.log(selectedItem);
  }

  const handleAddCartIconClickShop = (event: React.MouseEvent<HTMLElement>) => {
    toggleCartAddContainer();
    showChildElements(event);
  }


  return (
    <>
    <h1 style={{textAlign:"center"}}>Shop items</h1>

    <Main 
  isCartAddContainerOpen={isCartAddContainerOpen}
  toggleCartAddContainer={toggleCartAddContainer}
  handleAddCartIconClickShop={handleAddCartIconClickShop}
  />
  <CartAddBox
   isCartAddContainerOpen={isCartAddContainerOpen}
   toggleCartAddContainer={toggleCartAddContainer}
   quantity={quantity}
   handleMinusClick ={handleMinusClick}
   handlePlusClick ={handlePlusClick}
   selectedItem={selectedItem}
   

   
  />
       <Footer />
    </>
  )
}

export default Shop