import React from 'react';
import MEDNUTR from '../assets/MEDNUTR.jpg'

const About = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem',backgroundColor:"#bdeea5",height:"100vh" }}>
      <div style={{ flex: 1, paddingRight: '2rem' }}>
        <h1 style={{fontSize:"30px",textAlign:"center"}}>About Us</h1>
        <p><b>Welcome to MedNutr,</b> your premier destination for cutting-edge telemedicine and personalized healthcare solutions. In an era where accessibility and efficiency are paramount, MedNutr revolutionizes how patients and healthcare professionals connect, consult, and manage health. Our platform is meticulously designed to bridge the gap between traditional medical services and modern technology, offering a comprehensive, seamless experience tailored to meet today’s healthcare needs.

At MedNutr, we understand that health cannot wait. Long waiting times, geographical barriers, and logistical constraints often impede timely medical care. With this in mind, we have developed a versatile telemedicine platform that enables patients to consult with healthcare providers from the comfort of their homes, ensuring that quality medical advice is always just a few clicks away. Our virtual consultation feature facilitates real-time video interactions, making it simple for patients to discuss symptoms, receive diagnoses, and obtain treatment plans without leaving their living spaces.

MedNutr stands out because of our robust and secure document management system. Patients can effortlessly upload and store medical records, prescriptions, and test results on our encrypted platform. This ensures that healthcare providers have comprehensive, real-time access to essential patient data, leading to accurate diagnoses and tailored treatment plans. With data security being a top priority, MedNutr employs state-of-the-art encryption technologies, safeguarding sensitive information and giving both patients and doctors peace of mind.

Our appointment scheduling feature is another cornerstone of the MedNutr experience. We know that coordinating medical visits can be a challenge, especially for those with tight schedules. Our intuitive interface makes it simple to browse a healthcare provider’s availability and book appointments at times that work best for you.

In addition to medical consultations, MedNutr offers an integrated pharmacy service. Our in-built pharmacy allows patients to order prescribed medications seamlessly, with options for delivery or pickup. This integration streamlines the process of obtaining necessary medications, enhancing treatment adherence and simplifying post-consultation care.
One of our most groundbreaking features is the AI-based symptom diagnostic tool. Leveraging the power of artificial intelligence, this tool assists patients in understanding their symptoms and suggests potential health concerns even before meeting with a doctor. While it does not replace professional medical advice, it serves as a valuable preliminary assessment, guiding patients to the appropriate specialists or services. This innovation reflects our commitment to using advanced technology to empower patients and improve healthcare outcomes.

MedNutr also places a strong emphasis on collaboration and communication between healthcare professionals. Doctors can use our platform to share insights, consult on complex cases, and refer patients to specialists as needed, fostering a holistic approach to patient care. This networked model encourages the sharing of expertise and enhances the quality of care delivered.

Join us on this journey towards a healthier, more connected future. With MedNutr, medical care is reimagined, making health management simple, efficient, and personalized. Discover a new way to experience healthcare—where your well-being is our top priority.
        </p>
      </div>
      <div style={{ flex: 1,mixBlendMode:"multiply" }}>
        {/* <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '2rem' }}> */}
         <img src={MEDNUTR} style={{marginTop:"20%"}} />
        {/* </div> */}
      </div>
    </div>
  );
};

export default About;
