import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsList } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Header.css'; // Make sure you have a Header.css for custom styles

const Header = () => {
  return (
    <Navbar expand="lg" className="justify-content-between">
      <Container>
        <Navbar.Brand href="/" className="brand-container">
          <div>
            <img
              src={'/images/Header.svg'}
              alt="Logo"
              className="brand-logo"
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <BsList /> {/* Hamburger Icon */}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Use ms-auto to push items to the right */}
            <Nav.Link as={Link} to="/about">
              <img
                src={'/images/icons/Info_Button.svg'}
                alt="Info"
                className="info-icon"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
