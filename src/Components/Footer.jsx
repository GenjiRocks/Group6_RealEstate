import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  const footerStyle = {
    backgroundColor: '#343a40',
    color: 'white',
    padding: '40px 0',
  };

  const headingStyle = {
    marginBottom: '20px',
    fontSize: '18px',
    color: 'white',
  };

  const paragraphStyle = {
    fontSize: '14px',
    color: 'white',
  };

  const linkListStyle = {
    listStyle: 'none',
    padding: 0,
  };

  const linkItemStyle = {
    marginBottom: '10px',
    textDecoration:'none',
    color:'white',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

//   const linkHoverStyle = {
//     color: '#fff',
//     textDecoration: 'underline',
//   };

  const socialIconsStyle = {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  };

  const socialIconItemStyle = {
    margin: '0 10px',
  };

  const socialIconStyle = {
    color: 'white',
    fontSize: '18px',
  };

  const socialIconHoverStyle = {
    color: 'white',
  };

  const marginTopLargeStyle = {
    marginTop: '20px',
  };

  return (
    <footer style={footerStyle} className='bg-primary'>
      <Container>
        <Row>
          <Col md={4}>
            <h5 style={headingStyle} className=''>About HomeFinder</h5>
            <p style={paragraphStyle}>HomeFinder is a comprehensive full-stack real estate web application designed to streamline the process of finding and listing properties. Built using React.js for the front end and JSON Server for the backend and database, this platform provides users with a seamless experience for property discovery, management, and communication.</p>
          </Col>
          <Col md={4}>
            <h5 style={headingStyle}>Quick Links</h5>
            <ul style={linkListStyle}>

                
                <li style={linkItemStyle}><Link to={'/propertylisting'} style={{textDecoration:'none'}}>Property Listing</Link></li>
                <li style={linkItemStyle}><Link to={'/contact'} style={{textDecoration:'none'}}>Conctact Us</Link></li>
                <li style={linkItemStyle}><Link to={'/signup'} style={{textDecoration:'none'}}>Sign In / Sign Up</Link></li>
                
              
             
            </ul>
          </Col>
          <Col md={4}>
            <h5 style={headingStyle}>Contact Information</h5>
            <p style={paragraphStyle}>If you have any questions or need assistance, please feel free to reach out to us:</p>
            <p style={paragraphStyle}><strong>Email:</strong> support@homefinder.com</p>
            <p style={paragraphStyle}><strong>Phone:</strong> 080866 51651</p>
            <p style={paragraphStyle}><strong>Address:</strong> Luminar Technolab, Thrikkakara, Vazhakkala, Kakkanad, Kochi, Kerala 682030 </p>
          </Col>
        </Row>
        <Row style={marginTopLargeStyle}>
          <Col className="text-center">
            <ul style={socialIconsStyle}>
              <li style={socialIconItemStyle}><a href="https://www.facebook.com" ><FontAwesomeIcon  icon={faFacebook} size='xl' /></a></li>
              <li style={socialIconItemStyle}><a href="https://www.twitter.com" ><FontAwesomeIcon icon={faTwitter} size='xl' /></a></li>
              <li style={socialIconItemStyle}><a href="https://www.instagram.com" ><FontAwesomeIcon icon={faInstagram} size='xl' /></a></li>
              <li style={socialIconItemStyle}><a href="https://www.linkedin.com" ><FontAwesomeIcon icon={faLinkedin} size='xl' /></a></li>
            </ul>
            <p style={{ ...paragraphStyle, marginTop: '20px' }}>&copy; 2024 HomeFinder. All rights reserved.</p>
            <p style={{ ...paragraphStyle }}>Team: V Ashwin Deepak, Shani Shaju, Abhishek G Nair, Albin Manoj, Afsal M, Vishnu Vijayan</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
