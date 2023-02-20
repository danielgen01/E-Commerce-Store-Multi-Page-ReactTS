import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { NavLink , Routes, Route,Link,BrowserRouter} from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound';
import Cart from './components/Cart/Cart';


type CartItem = {
  title: string;
  price: number;
  quantity: number;
  image: string;
}


const App:React.FC = () => {


  
  const [isCartOpen,setIsCartOpen] = useState<boolean>(false);
  const [isSearchbarOpen,setIsSearchBarOpen] = useState<boolean>(false);
  const [isCartAddBoxOpen,setIsCartAddBoxOpen] = useState<boolean>(false);
  const [cartItems,setCartItems] = useState<CartItem[]>([]);
  const [cartCount,setCartCount] = useState(0);
  const [isTouchNavbarOpen, setIsTouchNavbarOpen] = useState<boolean>(false);

   
  const toggleCart = () => {
      setIsCartOpen(!isCartOpen);

      
  };

  const toggleSearchbar = () =>{
    setIsSearchBarOpen(!isSearchbarOpen);
  }

  const toggleTouchNavbar = () =>{
    setIsTouchNavbarOpen(!isTouchNavbarOpen);

    if (!isTouchNavbarOpen) {
      document.body.style.overflow = 'hidden'; // Scrollen auf der Seite deaktivieren
    } else {
      document.body.style.overflow = 'auto'; // Scrollen auf der Seite aktivieren
    }
  }

  const globalProps = {
    toggleCart: toggleCart,
    isSearchbarOpen:isSearchbarOpen,
    toggleSearchbar:toggleSearchbar,
    cartItems:cartItems,
    cartCount:cartCount,
    isTouchNavbarOpen:isTouchNavbarOpen,
    setIsTouchNavbarOpen:setIsTouchNavbarOpen,
    toggleTouchNavbar:toggleTouchNavbar
  }

  const cartProps = {
    isCartOpen:isCartOpen,
    toggleCart:toggleCart,
    cartItems:cartItems,
    setCartItems:setCartItems,
    cartCount:cartCount,
    setCartCount:setCartCount
  }

  const shopProps ={
    cartItems:cartItems,
    setCartItems:setCartItems,
    cartCount:cartCount,
    setCartCount:setCartCount
  }
 

  return (
    
 <BrowserRouter>
 <Header />
 <Navbar {...globalProps} />
 <Cart {...cartProps} />
   
 <Routes>
 <Route path='/' element={<Home />} />
 <Route path='/shop' element={<Shop {...shopProps} />} />
 <Route path='/contact' element={<Contact />} />
 <Route path="*" element={<NotFound />} />
 </Routes>

  
 

 </BrowserRouter>

    
  );
}

export default App;
