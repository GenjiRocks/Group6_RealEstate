import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../App.css'

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
        <Container>
          <NavLink style={{ textDecoration: 'none' }} to="/">
            <Navbar.Brand className="fs-3">
              <img
                width="35"
                height="35"
                className="me-2"
                src="/house.png"
                alt=""
              />
              HomeFinder
            </Navbar.Brand>
          </NavLink>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="fs-4">
                <NavLink
                  to="/propertylisting"
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  style={{ textDecoration: 'none' }}
                >
                  Property Listing
                </NavLink>
              </Nav.Link>

              <Nav.Link className="fs-4">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  style={{ textDecoration: 'none' }}
                >
                  Contact Us
                </NavLink>
              </Nav.Link>

              <NavLink to="/signin" style={{ textDecoration: 'none' }}>
                <Button variant="success" className="mt-2 ms-2 fs-4 rounded-5">
                  Sign-In
                </Button>
              </NavLink>
              <NavLink to="/signup" style={{ textDecoration: 'none' }}>
                <Button variant="info" className="mt-2 ms-2  fs-4 rounded-5">
                  Sign-Up
                </Button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
