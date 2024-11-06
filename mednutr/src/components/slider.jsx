import React, { useState } from "react";
import "./Slider.css";
import people from '../assets/people.png'

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    [
      { title: "Archit Vats", name: "", content: "First of all thanks to Razorpay Rize for providing all the support. Special mention to CS Ketki Mirje. She was very cooperative throughout the process." },
      { title: "Mayank Sharma", name: "Rapparel Solutions", content: "Just got my company incorporated through Razorpay Rize and had a really good experience. All my queries were handled proactively." },
      { title: "Krishna", name: "Tarunilakshmi Ventures", content: "Thank you for getting my OPC incorporated. Patient and persistent and always helpful despite the issues with the portal." },
      { title: "Nayan Mishra", name: "Zoync Technologies", content: "First of all, thanks  for providing all the support. Special mention to CS Ketki Mirje. She was very cooperative throughout the process." }
    ],
    [
      { title: "Nayan Mishra", name: "Zillout Social", content: "First of all thanks for providing all the support. Special mention to CS Ketki Mirje. She was very cooperative throughout the process." },
      { title: "Anup Totla", name: "DashHunt Education", content: "First of all thanks for providing all the support. Special mention to CS Ketki Mirje. She was very cooperative throughout the process.." },
      { title: "Archit Vats", name: "Rapparel Solutions", content: "First of all thanks for providing all the support. Special mention to CS Ketki Mirje. She was very cooperative throughout the process." },
      { title: "Nayan Mishra", name: "Tarunilakshmi Ventures", content: "Thank you for getting my OPC incorporated. Patient and persistent and always helpful despite the issues with the portal. Thank you again." }
    ],
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="arrow-slider">
      <button className="arrow left-arrow" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slides-container">
        <div
          className="slides"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              {slide.map((block, index) => (
                <div key={index} className="block"
                style={{boxShadow:'10px 14px 20px  rgba(0,0,0,0.5)'}}>
                  <div>
                    <p style={{ lineHeight: 1.3, fontSize: '17px', marginTop: '-8px' }}>{block.content}</p>
                  </div>
                  <hr />
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
                    <h5 style={{ fontSize: '19px', fontWeight: '200', marginRight: '100px' }}>{block.title}</h5>
                    <img src={people} alt="profile" style={{ width: '90px', height: '90px', borderRadius: '60%' }} />
                  </div>
                  <h5 style={{ marginTop: '-20px', marginLeft: '-190px', fontSize: '14px', fontWeight: '200', color: 'CDD4E4' }}>{block.name}</h5>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button className="arrow right-arrow" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;