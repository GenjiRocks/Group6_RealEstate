import React from 'react'
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import './Header.css';

function Header() {
  return (
    <>
    <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
      <Container>
        <Link style={{textDecoration:'none'}} to="/">
         <Navbar.Brand className='fs-3' >
          <img  width="35"
              height="35"
              className=" me-2 "  src="/public/house.png"  alt="" />
          HomeFinder</Navbar.Brand>
        </Link>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            <Nav.Link className='fs-4' href="#home">Property Listing</Nav.Link>
            <Nav.Link className='fs-4' href="/contact">Contact US</Nav.Link>
            <Button  variant="success" className='fs-5 mx-3 rounded-5'  >Sign-In</Button>
            <Button  variant="info" className='fs-5 rounded-5'>Sign-Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </>
    
  )
}

export default Header