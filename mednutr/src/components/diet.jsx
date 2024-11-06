import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './diet.css'; // CSS for transitions
import Navbar from './Navbar';
import { Button } from 'antd';

const Diet = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleSelect = (type) => {
    setActiveComponent(type);
  };

  return (
    <div className="app" style={{height:"100vh",backgroundColor:"#bdeea5"}}>
        <Navbar/>
        <div>
          <h1 style={{textAlign:'center'}}>  Prepare Your Diet Chart With us!</h1>
        </div>
      
      <div className="button-container">
        <Button onClick={() => handleSelect('dailyRoutine')}>Generate Daily</Button>
        <Button onClick={() => handleSelect('stressManagement')}>Stress Management</Button>
        <Button onClick={() => handleSelect('other')}>Other</Button>
      </div>

      <div className="content">
        <CSSTransition
          in={activeComponent === 'dailyRoutine'}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <DailyRoutine />
        </CSSTransition>
        
        <CSSTransition
          in={activeComponent === 'stressManagement'}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <StressManagement />
        </CSSTransition>
        
        <CSSTransition
          in={activeComponent === 'other'}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <Other />
        </CSSTransition>
      </div>
    </div>
  );
};

const DailyRoutine = () => (
  <div className="table">
    <h2  style={{textAlign:'center'}}>Daily Routine Chart</h2>
    <table>
      <thead>
        <tr>
          <th>Day</th>
          <th>Breakfast</th>
          <th>Lunch</th>
          <th>Dinner</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(7)].map((_, i) => (
          <tr key={i}>
            <td>Day {i + 1}</td>
            <td>Sprouts</td>
            <td>curd + 2roti + green vegetable + 1 bowl dal </td>
            <td>Oats / khichdi</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const StressManagement = () => (
  <div className="table">
    <h2 style={{textAlign:'center'}}>Stress Management Chart</h2>
    <table>
      <thead>
        <tr>
          <th>Day</th>
          <th>Breakfast</th>
          <th>Lunch</th>
          <th>Dinner</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(7)].map((_, i) => (
          <tr key={i}>
            <td>Day {i + 1}</td>
            <td>Omelet/Avocado toast</td>
            <td>1 roti+ 1 bowl lentils + Salads</td>
            <td>Toast/Greek yogurt</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Other = () => (
  <div className="input-container">
    <h2 style={{textAlign:"center"}}>Describe Your Problem & Routine</h2>
    <textarea placeholder="Describe your problem & routine here to generate health chart"
    style={{width:"1200px",marginLeft:'10%'}}></textarea>
    <Button style={{marginLeft:'45%',marginTop:'5%',backgroundColor:"#3ab57e",width:"150px",height:"40px",fontSize:'18px'}}>Generate Chart</Button>
  </div>
);

export default Diet;
