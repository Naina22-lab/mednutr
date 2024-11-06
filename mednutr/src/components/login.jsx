import React from 'react';
import './Login.css'; 
import MEDNUTR from '../assets/MEDNUTR.jpg'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handlelogin = (e) => {
        e.preventDefault();
        navigate('/');
      };
    
  return (
    <div className="login-container">
      <div className="circle">
        <img src={MEDNUTR}/>
      </div>
      <div className="login-form">
        <h1 className="login-title">LOGIN</h1>
        <label className="label" htmlFor="email">EMAIL ID</label>
        <input className="input" type="email" id="email" placeholder="Enter your email" />
        
        <label className="label" htmlFor="password">Password</label>
        <input className="input" type="password" id="password" placeholder="Enter your password" />
        
        <button className="login-button" onClick={handlelogin}>LOGIN</button>
      </div>
    </div>
  );
};

export default Login;
