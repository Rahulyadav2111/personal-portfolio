import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div>
       <div className="container">
        <h2>CONTACT</h2>
        <div className="details">
          <div className="detail">
            <h1>SOCIAL PROFILES</h1>
            <div className="social">
            <a href="https://www.linkedin.com/in/rahul-yadav21/" target='_blank'>LinkedIn</a>
            <a href="https://github.com/Rahulyadav2111" target='_blank'>GitHub</a>
            <a href="https://www.instagram.com/rhl_ydv_21/" target='_blank'>Instagram</a>
          </div>
          </div>
        </div>
        <div className="details details2">
          <div className="detail">
              <h1>Email</h1>
              <p>rahul211136@gmail.com</p>
          </div>
          <div className="detail">
              <h1>Phone</h1>
              <p>+91-9548910704</p>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Contact