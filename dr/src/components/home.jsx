import React, { useState } from 'react';
import Navbar from './navbar';
import {Button} from 'antd'
import './home.css'
import { useNavigate } from 'react-router-dom';


// const ConsultationRequest = ({ request, onApprove, onReject, onView }) => (
//   <div className="consultation-request">
//     <p><strong>Patient Name:</strong> {request.patientName}</p>
//     <p><strong>Disease:</strong> {request.disease}</p>
//     <p><strong>Type:</strong> {request.type}</p>
//     <p>Status: {request.status}</p>
//     <button onClick={() => onApprove(request.id)}>✔️</button>
//     <button onClick={() => onReject(request.id)}>❌</button>
//     <button onClick={() => onView(request)}>👁️</button>
//   </div>
// );


const ConsultationRequest = ({ request, onApprove, onReject, onView }) => (
  <div className="consultation-container">
    <div className="consultation-info">
      <h4 >{request.patientName}</h4>
      <p>{request.disease}</p>
    </div>
    <div className="consultation-status">
      <span className="status-badge">{request.status}</span>
      <div className="action-buttons">
        <button className="approve" onClick={() => onApprove(request.id)}>✔️</button>
        <button className="reject" onClick={() => onReject(request.id)}>❌</button>
        <button className="view" onClick={() => onView(request)}>👁️</button>
      </div>
    </div>
  </div>
);


const WebinarCard = ({ webinar }) => {
  const handleBookNow = () => {
    alert("You will be notified when the session starts.");
  };
  return(
  <div className="webinar-card">
    <h3>{webinar.name}</h3>
    <pre>{webinar.date}</pre>
    <p>{webinar.description}</p>
    <Button style={{width:'120px',height:'40px',backgroundColor:'#3ab57e',color:'black',marginLeft:'10%'}}
    className="book-button"onClick={handleBookNow}
    >Book Now</Button>
  </div>
  )
};

const Home = () => {

  const navigate = useNavigate();
  const [requests, setRequests] = useState([
    { id: 1, patientName: 'John Doe', disease: 'Flu', type: 'Regular', status: 'Pending' },
    { id: 2, patientName: 'Jane Smith', disease: 'COVID-19', type: 'Emergency', status: 'Pending' },
    { id: 3, patientName: 'Alice Eve', disease: 'Cancer', type: 'Regular', status: 'Pending' },
    { id: 4, patientName: 'Brown Dok', disease: 'Heart Attack', type: 'Emergency', status: 'Pending' }
  ]);

  const webinars = [
    { 
      name: 'Introductory Cancer Awareness', 
      date: '2024-11-10', 
      description: 'A comprehensive overview of cancer types, symptoms, and preventive measures.' 
    },
    { 
      name: 'Cardiology Basics', 
      date: '2024-11-12', 
      description: 'An introduction to cardiovascular health, covering common heart diseases and treatments.' 
    },
    { 
      name: 'Mental Health in Practice', 
      date: '2024-11-15', 
      description: 'Guidance on managing mental health disorders, focusing on anxiety, depression, and stress.' 
    },
    { 
      name: 'Advanced Surgical Techniques', 
      date: '2024-11-17', 
      description: 'An advanced session on the latest surgical procedures and technology.' 
    },
    { 
      name: 'Pediatrics: Common Childhood Illnesses', 
      date: '2024-11-20', 
      description: 'Exploring frequent pediatric conditions and approaches to effective treatment.' 
    },
    { 
      name: 'Diabetes Management and Care', 
      date: '2024-11-25', 
      description: 'Best practices for diagnosing and managing diabetes, with a focus on patient care.' 
    }
  ];
  

  const handleApprove = (id) => {
    setRequests(requests.map(req => req.id === id ? { ...req, status: 'Approved' } : req));
  };

  const handleReject = (id) => {
    setRequests(requests.map(req => req.id === id ? { ...req, status: 'Rejected' } : req));
  };

  const handleViewDetails = (request) => {
    alert(`Patient: ${request.patientName}\nDisease: ${request.disease}\nType: ${request.type}`);
  };

  const handleJoin = () => {
    alert("You will be notified whenever there is new notification.");
  };

  return (
    <div className="App" style={{backgroundColor:'#bdeea5',width:'100%'}}>
      <Navbar/>
      <h2 style={{textAlign:'center'}}>Video Consultation Request</h2>
      {requests.map(request => (
        <ConsultationRequest
          key={request.id}
          request={request}
          onApprove={handleApprove}
          onReject={handleReject}
          onView={handleViewDetails}
        />
      ))}
      <Button style={{width:'270px',height:'40px',backgroundColor:'#3ab57e',color:'black',marginLeft:'42%',fontSize:'18px'}}
      onClick={()=>navigate('/conference')}>Check All Consultation Requests</Button>

      <h2  style={{textAlign:'center'}}>Seminars and Webinars</h2>
      <div className="webinar-container">
        {webinars.map((webinar, index) => (
          <WebinarCard key={index} webinar={webinar} />
        ))}
      </div>

      <h2  style={{textAlign:'center'}}>Community Forum</h2>
      <p style={{textAlign:'center'}}>Connect with others</p>
      <div>
        <img src='https://www.ezoic.com/wp-content/uploads/2020/12/7-tips-for-running-a-successful-forum-or-online-community.jpg'
        style={{mixBlendMode:'multiply',width:'800px',height:'500px',borderRadius:'50%',marginLeft:'25%'}}/>
        <Button style={{width:'270px',height:'40px',backgroundColor:'#3ab57e',color:'black',marginLeft:'43%',fontSize:'18px',marginTop:'30px'}}
        onClick={handleJoin}>JOIN NOW</Button>
      </div>
      

      <footer className="footer">
        <p style={{fontFamily:"cursive", textAlign:'center'}}>@vultr Hackathon</p>
      </footer>
    </div>
  );
};
export default Home;
