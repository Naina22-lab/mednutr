import React from "react";
import Chatbot from "./components/chatbot"
import Register from "./components/register";
import Home from "./components/home";
import Login from "./components/login";
import About from "./components/about";
import Contact from "./components/contact";
import Cart from "./components/cart";
import Payment from "./components/payment";
import Consult from "./components/consult";
import Diet from "./components/diet";
import Pharmacy from "./components/pharmacy";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Buy from "./components/buy";

const App =()=>{
  return(
    //   {/* <Chatbot/> */}
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/consult" element={<Consult/>} />
      <Route path="/diet" element={<Diet/>} /> 
      <Route path="/pharmacy" element={<Pharmacy/>} /> 
      <Route path="/buy" element={<Buy/>} /> 
      <Route path="/chatbot" element={<Chatbot/>} /> 
    </Routes>
  </Router>
  )
}

export default App