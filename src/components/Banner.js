import React  from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import HeaderImg from '../assets/img/header-img.png';
import pdf from '../assets/files/cv-english.pdf'
import { ArrowRightCircle } from 'react-bootstrap-icons';


export const Banner = ()=> {
  
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>
                            Hey!, My name is Sofía and I'm 
                        </span>
                        <h1><span className="wrap">Full-Stack web developer</span></h1>
                        <p className='description'>I enjoy building and designing for the web.I'm passionate about communications and programming with JS. I am good at working in a team, inventing                      solutions and googling :). <a href='https://www.linkedin.com/in/sofia-m-fernandez-lacroux/' target="_blank" rel="noopener noreferrer">Let's connect! <ArrowRightCircle/></a>

                        </p>
                        <button className='boton'>
                            <a href={pdf} target="_blank" rel="noopener noreferrer" download="cv-english.pdf"> 
                                Download my resume 
                            </a>
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImg} alt='Header image'/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}