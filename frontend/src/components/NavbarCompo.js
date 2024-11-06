import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import Tera from '../assets/tera.png';

function NavbarCompo() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary home-navbar " sticky="top">
      <Container>
        <Navbar.Brand href="#home"><img src={Tera} style={{width:'100px'}}/>Edu</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
            <NavDropdown title="Courses" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Full-Stack Development Course</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Introduction To Software Enginnering</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Join Free</Nav.Link>
            <NavDropdown title="Language" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sinhala</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tamil</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCompo;