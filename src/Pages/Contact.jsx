import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'


function Contact() {

  // Function calling
  const [userDetails, setuserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  console.log(userDetails);
  
  // Button Onclick
  const handleSubmit = (e)=>{
    e.preventDefault();
    const{name,email,phone,message} = userDetails
    if(!name || !email || !phone || !message){
      alert("Please fill all the fields")
    }else{
      
      // reset the data
      setuserDetails({
        name: '',
        email: '',
        phone: '',
        message: '',
        })
        alert("Your message has been sent successfully")
    }
  }


  // Styling 
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '40px',
    // backgroundColor: '#f8f9fa',
    // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const columnStyle = {
    flex: 1,
    padding: '20px',
    margin: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    borderRadius: '8px',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#343a40',
  };

  const paragraphStyle = {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#6c757d',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const inputStyle = {
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ced4da',
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const cardStyle = {
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    backgroundColor: '#fff',
  };

  const reviewStyle = {
    fontSize: '16px',
    color: '#343a40',
  };

  const starStyle = {
    color: '#ffc107',
  };

  const userNameStyle = {
    marginTop: '10px',
    fontSize: '14px',
    color: '#6c757d',
  };
  return (
    <>
       <div>
       <Header/>
      <div style={containerStyle}>
      <div style={columnStyle}>
        <h2 style={headingStyle}>Love to hear from you, Get in touch 👋</h2>
        <p style={paragraphStyle}>
            HomeFinder gives you the tools and features you need to create a professional real estate platform.
            Whether you're a buyer or seller, our platform provides a seamless experience for property discovery,
            management, and communication.
        </p>
        <div style={cardStyle}>
          <div style={reviewStyle}>
            <span style={starStyle}>★★★★★</span>
            <p>Great service, highly recommend!</p>
          </div>
          
          <p style={userNameStyle}>- Username</p>
        </div>
        <div style={cardStyle}>
            <div style={reviewStyle}>
              <span style={starStyle}>★★★★★</span>
              <p>Very helpful and easy to use!</p>
            </div>
            <p style={userNameStyle}>- Username2</p>
          </div>

      </div>

      <div style={columnStyle}>
        <h2 style={headingStyle}>Send us a message</h2>
        <form style={formStyle} onSubmit={handleSubmit}>
          <input type="text" value={userDetails.name} placeholder="Your Name" style={inputStyle} onChange={(e)=>{
            setuserDetails({...userDetails,name:e.target.value})
          }} />
          <input type="email" value={userDetails.email} placeholder="Email Address" style={inputStyle} onChange={(e)=>{
            setuserDetails({...userDetails,email:e.target.value})
          }} />
          <input type="tel" value={userDetails.phone} placeholder="Phone No" style={inputStyle} onChange={(e)=>{
            setuserDetails({...userDetails,phone:e.target.value})
          }} />
          <textarea placeholder="Your Message" value={userDetails.message} style={{ ...inputStyle, height: '100px' }} onChange={(e)=>{
            setuserDetails({...userDetails,message:e.target.value})
          }}></textarea>
          <button type="submit" onClick={handleSubmit} style={buttonStyle}>Send Message</button>
        </form>
      </div>
    </div>
    
    <Footer/>
       </div>

    </>
 
       
  )
}

export default Contact