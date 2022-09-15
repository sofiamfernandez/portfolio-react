import React from 'react';
import { useState, useEffect } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import logo from '../assets/img/full-logo.png';
import navicon1 from '../assets/img/nav-icon1.svg';
import navicon2 from '../assets/img/github.png';
import navicon3 from '../assets/img/nav-icon3.svg';

// import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

    return (
      <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img className='logo-nav' src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav navbar-collapse collapse-in">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon top">
                <a href="https://www.linkedin.com/in/sofia-m-fernandez-lacroux/" target="_blank"rel="noreferrer"><img src={navicon1} alt="linkedin" /></a>
                <a href="https://github.com/sofiamfernandez" target="_blank" rel="noreferrer"><img src={navicon2} alt="github" /></a>
                <a href="https://www.instagram.com/sofia.m.fernandez/n" target="_blank" rel="noreferrer"><img src={navicon3} alt="instagram" /></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     </Router>
      )
}
