import React, { useState, useEffect } from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import {ArrowRightCircle} from 'react-bootstrap-icons';
import HeaderImg from '../assets/img/header-img.png';



export const Banner = ()=> {
  
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Hey!, I'm Sofía
                        </span>
                        <h1><span className="wrap">Full-Stack web developer</span></h1>
                        <p>I enjoy building and designing for the web.
                        </p>
                        <button><span>Download my resume <ArrowRightCircle/></span></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImg} alt='Header image'/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}