import React, { useState } from 'react';
import { Button, Radio } from 'antd';
import './payment.css'; // Import your CSS for styling
import Navbar from './Navbar';

const Payment = () => {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentOptionClick = (option) => {
    setSelectedPaymentOption(option);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="payment-page">
      {/* Navbar */}
      <div className="navbar"><Navbar/></div>

      {/* Payment Options */}
      <div className="payment-options">
        <Button
          onClick={() => handlePaymentOptionClick('subscription')}
          className="payment-button"
        >
          Subscription Payment
        </Button>
        <Button
          onClick={() => handlePaymentOptionClick('pharmacy')}
          className="payment-button"
        >
          Pharmacy Payment
        </Button>
        <Button
          onClick={() => handlePaymentOptionClick('consultation')}
          className="payment-button"
        >
          Doctor Consultation Fee
        </Button>
      </div>

      {/* Payment Method Section */}
      {selectedPaymentOption && (
        <div className="payment-method-section">
          <h2>Pay Now...</h2>
          <p>Select below for paying now...</p>

          <div className="payment-methods">
            <div className="pay-via">Pay via:</div>
            <Radio.Group
              onChange={handlePaymentMethodChange}
              value={paymentMethod}
              className="radio-group"
            >
              <Radio value="upi">UPI</Radio>
              <Radio value="credit card">Credit Card</Radio>
              <Radio value="netbanking">Netbanking</Radio>
            </Radio.Group>
          </div>

          <div className="total-section">
            <span className="total-label">Total:</span>
            <span className="total-amount">1500</span>
          </div>

          <Button type="primary" className="pay-now-button">
            Pay Now
          </Button>
        </div>
      )}
    </div>
  );
};

export default Payment;
