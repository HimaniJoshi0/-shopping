import React from 'react';
import './components/nav.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home.jsx';
import Cart from './pages/cart.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
  <Router>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/cart" element={<Cart />} />
  </Routes>
  </Router>
   
    </>
  );
}

export default App;

