import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/full-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center h-footer">
          <Col size={12} sm={6} className="logo-xs" >
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sofia-m-fernandez-lacroux/" target="_blank"rel="noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/sofiamfernandez" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Github" /></a>
              <a href="https://www.instagram.com/sofia.m.fernandez/n" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Powered by Sophie Ferdz ♥</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}