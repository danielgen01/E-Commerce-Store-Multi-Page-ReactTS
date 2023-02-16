import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { NavLink , Routes, Route,Link,BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Cart from './components/Cart/Cart';


const App:React.FC = () => {

  
  const [isCartOpen,setIsCartOpen] = useState<boolean>(false);
  const [isSearchbarOpen,setIsSearchBarOpen] = useState<boolean>(false);
  const [isCartAddBoxOpen,setIsCartAddBoxOpen] = useState<boolean>(false);
  const [cartItems,setCartItems] = useState([]);
  
  const toggleCart = () => {
      setIsCartOpen(!isCartOpen);

      if (!isCartOpen) {
        document.body.style.overflow = 'hidden'; // Scrollen auf der Seite deaktivieren
      } else {
        document.body.style.overflow = 'auto'; // Scrollen auf der Seite aktivieren
      }
      
  };

 

  const toggleSearchbar = () =>{
    setIsSearchBarOpen(!isSearchbarOpen);
  }

  
 
 

  return (
    
 <BrowserRouter>
 <Header />
 <Navbar
  toggleCart={toggleCart}
  isSearchbarOpen={isSearchbarOpen}
   toggleSearchbar={toggleSearchbar}
   />

 <Cart
  isCartOpen={isCartOpen}
  toggleCart={toggleCart}
  cartItems={cartItems}
  setCartItems={setCartItems}
   />
   
 <Routes>
 <Route path='/' element={<Home />} />
 <Route path='/shop' element={<Shop/>} />
 <Route path='/about' element={<About />} />
 <Route path='/contact' element={<Contact />} />
 <Route path="*" element={<NotFound />} />
 </Routes>

  
 
 <Footer />
 </BrowserRouter>

    
  );
}

export default App;
