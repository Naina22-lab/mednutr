import React from "react";
import Register from "./components/register";
import Home from "./components/home";
import Login from "./components/login";
import About from "./components/about";
import Contact from "./components/contact";
import Conference from './components/conference'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App =()=>{
  return(
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/conference" element={<Conference/>} /> 
    </Routes>
  </Router>
  )
}

export default App