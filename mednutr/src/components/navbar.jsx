import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import  MEDNUTR from'../assets/MEDNUTR.jpg'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className='logo'>
            <img src={MEDNUTR}
            style={{width:"90px",height:"90px",mixBlendMode:"multiply"}} />
        </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link"
        style={{color:"black",fontSize:"25px"}}>Home</Link>
        <Link to="/about" className="navbar-link" style={{color:"black",fontSize:"25px"}}>About</Link>
        <Link to="/cart" className="navbar-link" style={{color:"black",fontSize:"25px"}}>Cart</Link>
        <Link to="/contact" className="navbar-link" style={{color:"black",fontSize:"25px"}}>Contact</Link>
        <Link to="/register" className="navbar-link" style={{color:"black",fontSize:"25px"}}>Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
