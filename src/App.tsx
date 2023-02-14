import React from 'react';
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

function App() {
  return (
 <BrowserRouter>
 <Header />
 <Navbar />
 <Routes>
 <Route path='/' element={<Home />} />
 <Route path='/shop' element={<Shop />} />
 <Route path='/about' element={<About />} />
 <Route path='/contact' element={<Contact />} />
 <Route path="*" element={<NotFound />} />
 </Routes>

 
 
 </BrowserRouter>

  

  );
}

export default App;
