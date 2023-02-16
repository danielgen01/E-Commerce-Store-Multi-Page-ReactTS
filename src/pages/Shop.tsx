import React, {useState,useEffect} from 'react'
import Main from '../components/Main/Main'
import CartAddBox from '../components/CartAddBox/CartAddBox';
import { StringMappingType } from 'typescript';
import Footer from '../components/Footer/Footer';

type ShopProps = {
  cartItems:any;
  setCartItems:any
}


const Shop:React.FC<ShopProps> = ({ cartItems, setCartItems }) => {
  const [isCartAddContainerOpen,setIsCartContainerOpen] = useState<boolean>(false);
  const [quantity,setQuantity] = useState(1);
  const [selectedItem,setSelectedItem] = useState({});
  
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  
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
    
  }

  // IF USER CLICKS ON A SHOP ITEM A BOX WILL OPEN 

  const handleAddCartIconClickShop = (event: React.MouseEvent<HTMLElement>) => {
    toggleCartAddContainer();
    showChildElements(event);
  }

  // THIS IS THE FUNCTION FOR THE OPEN BOX TO ADD THE ITEM TO CART 
  
  const handleAddToCartClick = (event: React.MouseEvent<HTMLElement>) => {
    const parent:any = event.currentTarget.parentNode;
    const productTitle:string = parent.children[0].innerHTML;
    const productPrice:number = parent.children[1].innerHTML;
    const productQuantity:number = parent.children[2].value;
    const productImage:string = parent.parentNode.querySelector("img").src;
    // console.log(` TITLE: ${productTitle} PRICE: ${productPrice}
    //  QUANTITY:${productQuantity} IMAGE SRC: ${productImage}`);

     setCartItems((prevCartItems: any) => [...prevCartItems, {
        title: productTitle,
        price: productPrice,
        quantity: productQuantity,
        image: productImage
     }])

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
   handleAddToCartClick={handleAddToCartClick}
   

   
  />
       <Footer />
    </>
  )
}

export default Shop