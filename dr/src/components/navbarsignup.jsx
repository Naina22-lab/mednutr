import React from 'react';
import { Link } from 'react-router-dom';
import './Navbarsignup.css'; 
import  MEDNUTR from'../assets/MEDNUTR.jpg'

const Navbarsignup = () => {
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
        {/* <Link to="/cart" className="navbar-link" style={{color:"black"}}>Cart</Link> */}
        <Link to="/contact" className="navbar-link" style={{color:"black",fontSize:"25px"}}>Contact</Link>
        <Link to="/login" className="navbar-link" style={{color:"black",fontSize:"25px"}}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbarsignup;
