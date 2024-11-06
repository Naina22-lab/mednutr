import React, { useState } from 'react';
import Navbar from './Navbar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Consult = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const navigate = useNavigate();
  // Example doctor data
  const doctors = {
    emergency: [
      { id: 1, name: 'Dr. Smith', specialization: 'Cardiologist', price: '$100',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQpXYvz56A_3W9ucLWHqlIQIHe3vgxHIS5A&s' },
      { id: 2, name: 'Dr. Jane', specialization: 'Orthopedic', price: '$120',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQpXYvz56A_3W9ucLWHqlIQIHe3vgxHIS5A&s' },
      { id: 3, name: 'Dr. Joe', specialization: 'Physician', price: '$100',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQpXYvz56A_3W9ucLWHqlIQIHe3vgxHIS5A&s' },
      { id: 4, name: 'Dr. Dev', specialization: 'Dentist', price: '$100',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQpXYvz56A_3W9ucLWHqlIQIHe3vgxHIS5A&s' },
      { id: 5, name: 'Dr. John', specialization: 'Oncologist', price: '$100',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQpXYvz56A_3W9ucLWHqlIQIHe3vgxHIS5A&s' },
      { id: 6, name: 'Dr. Jack', specialization: 'Surgeon', price: '$100',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQpXYvz56A_3W9ucLWHqlIQIHe3vgxHIS5A&s' }
    ],
    regularCheckup: [
      { id: 7, name: 'Dr. Alice', specialization: 'Physician', price: '$80',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCbJcODQV3f9wqSWml3YMxB5ZqO9OdfgdHeQ&s' },
      { id: 8, name: 'Dr. Bob', specialization: 'Dentist', price: '$90',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQpXYvz56A_3W9ucLWHqlIQIHe3vgxHIS5A&s' },
      { id: 9, name: 'Dr. Ava', specialization: 'Surgeon', price: '$80',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCbJcODQV3f9wqSWml3YMxB5ZqO9OdfgdHeQ&s' },
      { id: 10, name: 'Dr. Joe', specialization: 'Orthopedic', price: '$90',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQpXYvz56A_3W9ucLWHqlIQIHe3vgxHIS5A&s' },
      { id: 11, name: 'Dr. shersha', specialization: 'Oncologist', price: '$80',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCbJcODQV3f9wqSWml3YMxB5ZqO9OdfgdHeQ&s' },
      { id: 12, name: 'Dr. Venky', specialization: 'Cardiologist', price: '$90',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQpXYvz56A_3W9ucLWHqlIQIHe3vgxHIS5A&s' },
      { id: 13, name: 'Dr. Dack', specialization: 'Dentist', price: '$90',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQpXYvz56A_3W9ucLWHqlIQIHe3vgxHIS5A&s' }
    ]
  };

  const handleTypeClick = (type) => {
    setSelectedType(type);
    setSelectedDoctor(null);
  };

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
  };
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div style={{backgroundColor:"#bdeea5",height:"100vh"}}>
      <Navbar/>
      <h1 style={{textAlign:"center",fontSize:"40px"}}>Book your video consultation now...</h1>
      <div className="type-selection" style={{display:"flex",alignItems:"center",justifyContent:'center',gap:"130px"}}>
        <Button  type='primary' onClick={() => handleTypeClick('emergency')}
            style={{backgroundColor:"#3ab57e",color:"black",height:"40px",width:"160px"}}>Emergency</Button>
        <Button  type='primary' onClick={() => handleTypeClick('regularCheckup')}
            style={{color:"black",backgroundColor:"#3ab57e",height:"40px",width:"160px"}}>Regular Checkup</Button>
      </div>

      {/* <div className="doctor-list">
        {selectedType &&
          doctors[selectedType].map((doctor) => (
            <div
              key={doctor.id}
              className="doctor-card"
              onClick={() => handleDoctorClick(doctor)}
            >
              <div className="doctor-img">{doctor.img}</div>
              <div>{doctor.name}</div>
              <div>{doctor.specialization}</div>
              <div>{doctor.price}</div>
            </div>
          ))}
      </div> */}
         {selectedType && (
        <Slider {...sliderSettings} className="doctor-slider" style={{ margin: '30px',display:"flex",justifyContent:"space-between", marginLeft:"40px"}}>
          {doctors[selectedType].map((doctor) => (
            <div key={doctor.id} className="doctor-card" onClick={() => handleDoctorClick(doctor)} style={{ padding: '20px', textAlign: 'center', backgroundColor: '#fff', borderRadius: '10px', margin: '10px',border:"2px solid black" }}>
              <img src={doctor.img} alt={doctor.name} style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
              <div style={{ marginTop: '20px',marginLeft:"25px" }}>{doctor.name}</div>
              <div style={{ marginTop: '10px',marginLeft:"25px"}}>{doctor.specialization}</div>
              <div style={{ marginTop: '7px',marginLeft:"25px"}}>{doctor.price}</div>
            </div>
          ))}
        </Slider>
      )}

      {selectedDoctor && (
        <Button className="book-now"
        style={{alignItems:"center",color:"black",backgroundColor:"#3ab57e",marginLeft:"40%",marginTop:"40px",width:"130px",height:"40px"}}
        onClick={()=>navigate('/payment')}>Book Now</Button>
      )}
    </div>
  );
};

export default Consult;
