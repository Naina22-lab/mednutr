import React, { useState } from 'react';
import Navbar from './navbar';
import { Button } from 'antd';

const medicines = [
  { id: 1, name: 'Paracetamol', price: 100 },
  { id: 2, name: 'Ibuprofen', price: 50 },
  { id: 3, name: 'Amoxicillin', price: 200 },
  { id: 4, name: 'Cough Syrup', price: 80 },
  { id: 5, name: 'B.P. instrument', price: 1400 },
  { id: 6, name: 'Livon', price: 78 },
  { id: 7, name: 'Sugar machine', price: 800 },
  { id: 8, name: 'Therapy machine', price: 18000 },
  { id: 9, name: 'Dolo', price: 80 },
  { id: 10, name: 'Saridon', price: 110 },
  { id: 11, name: 'Ketamine inj', price: 890 },
  { id: 12, name: 'Gentamicin inj 80mg', price: 147 },
  { id: 13, name: 'Heparin', price: 128 },
  { id: 14, name: 'Lemolate', price: 20 },
  { id: 15, name: 'Zexon', price: 49},
  { id: 16, name: 'Amlodipine', price: 33 },
  { id: 17, name: 'Ubrelvy', price: 1200 },
  { id: 18, name: 'Elagolix', price: 459 },
  { id: 19, name: 'Tamoxifen', price: 798 },
  { id: 20, name: 'Seroquel', price: 79 },
  { id: 21, name: 'Quixin', price: 70 },
  { id: 22, name: 'Haldol', price: 68 },
  { id: 23, name: 'Lignocine', price: 1980 },
  { id: 24, name: 'Prilocaine', price: 654 },
  { id: 25, name: 'Enhertu', price: 120 },

];

const Buy = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  const handleAddToCart = (medicine) => {
    setCart([...cart, medicine]);
  };

  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{backgroundColor:'#bdeea5',height:'auto'}} >
      <nav className="navbar"><Navbar/></nav>
      <input
        type="text"
        placeholder="Find your medicine"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{width:"500px",height:'30px',marginLeft:'30%',borderRadius:"9px",marginBottom:'30px'}}
      />

      {/* {filteredMedicines.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredMedicines.map((medicine) => (
              <tr key={medicine.id}>
                <td>{medicine.name}</td>
                <td>Rs{medicine.price}</td>
                <td>
                  <Button onClick={() => handleAddToCart(medicine)}
                    style={{backgroundColor:'#3ab57e',color:'black',width:'150px',height:"40px"}}>Add to Cart</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}

      {filteredMedicines.length > 0 ? (
        <table style={{ width: '80%', margin: '0 auto', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px', color: 'black',fontSize:'20px' }}>Name</th>
              <th style={{ padding: '10px', color: 'black',fontSize:'20px' }}>Price</th>
              <th style={{ padding: '10px', color: 'black',fontSize:'20px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredMedicines.map((medicine) => (
              <tr key={medicine.id} style={{ textAlign: 'center', borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '15px' }}>{medicine.name}</td>
                <td style={{ padding: '15px' }}>Rs {medicine.price}</td>
                <td style={{ padding: '15px' }}>
                  <Button
                    onClick={() => handleAddToCart(medicine)}
                    style={{ backgroundColor: '#3ab57e', color: 'black', width: '100%', height: "40px" }}
                  >
                    Add to Cart
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No medicine found</p>
      )}

      <div className="cart">
        <h2>Cart</h2>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index}>
              {item.name} - Rs{item.price}
            </div>
          ))
        ) : (
          <p>Your Cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Buy;
