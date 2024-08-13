import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import Header from "./components/Header";
import ViewPage from "./components/ViewPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Cards />} />
          <Route path="/products/:ProductID" element={<ViewPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart/>}/>

 
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
