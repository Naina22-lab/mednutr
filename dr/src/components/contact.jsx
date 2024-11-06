import React from 'react';

const Contact = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',backgroundColor:"#bdeea5" }}>
      <div style={{ padding: '2rem', width: '400px' }}>
        <h1 style={{ textAlign: 'center',fontSize:"35px" }}>Contact Us</h1>
        <form>
          <div style={{ marginBottom: '1rem' }}>
            <label>Email</label>
            <input type="email" style={{ width: '100%', padding: '0.5rem' ,borderRadius:"5px"}} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Phone Number</label>
            <input type="tel" style={{ width: '100%', padding: '0.5rem',borderRadius:"5px" }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Description</label>
            <textarea style={{ width: '100%', padding: '0.5rem', minHeight: '100px' ,borderRadius:"5px"}}placeholder='describe your problem'></textarea>
          </div>
          <button type="submit" style={{ width: '100%', padding: '0.5rem', background:'#3ab57e', border: 'none', borderRadius: '4px',height:"50px",marginLeft:"10px" }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
