import React from 'react';
import './register.css';
import Navbarsignup from './navbarsignup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [medicalReports, setMedicalReports] = useState([]);
    const navigate = useNavigate();

  const handleFileChange = (e) => {
    setMedicalReports([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', medicalReports);
    navigate('/');
  };

  return (
    <div className="signup-container">
      <Navbarsignup/>
      <div className="signup-header">
        <h1>Create New Account</h1>
        <p>Already Registered? <a href="/login">Login</a></p>
      </div>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="dob">DOB</label>
          <input type="date" id="dob" name="dob" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="medical-report">Medical Report</label>
          <input
            type="file"
            id="medical-report"
            name="medical-report"
            multiple
            onChange={handleFileChange}
            accept=".pdf,.jpg,.png,.docx" 
            style={{background:"white"}}
          />
        </div>
        <button type="submit"
        onClick={handleSubmit} className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
