import React from 'react';
import react from "../assets/img/react.png";
import node from "../assets/img/node.png";
import javascript from "../assets/img/js.png";
import wordpress from "../assets/img/wordpress.png";
import figma from "../assets/img/figma.svg";
import git from "../assets/img/git.png";
import mysql from "../assets/img/mysql.png";
import vs from "../assets/img/vs.png";
import bootstrap from "../assets/img/bootstrap.png";
import sass from "../assets/img/sass.png";
import powerbi from "../assets/img/powerbi.png";
import scrum from "../assets/img/scrum.png";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
   
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>My Skills</h2>
                        <p>My everyday tools</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <a  href="https://es.reactjs.org/" target="_blank" ><img src={react} alt="React" /></a>
                                <h5>Front-End</h5>
                            </div>
                            <div className="item">
                                <a href='https://nodejs.org/es/'target="_blank" ><img src={node} alt="Node" /></a>
                                <h5>Back-End</h5>
                            </div>
                            <div className="item">
                                <a href='https://www.javascript.com/' target="_blank"><img src={javascript} alt="Javascript" /></a>
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <a href='https://wordpress.org/' target="_blank"><img src={wordpress} alt="WordPress" /></a>
                                <h5>CMS</h5>
                            </div>
                            <div className="item">
                                <a href='https://www.figma.com/'target="_blank" ><img src={figma} alt="Figma" /></a>
                                <h5>UX-UI Design</h5>
                            </div>
                            <div className="item">
                                <a href='https://git-scm.com/' target="_blank" ><img src={git} alt="Git" /></a>
                                <h5>Version Control</h5>
                            </div>
                            <div className="item">
                                <a href='https://www.mysql.com/' target="_blank"><img src={mysql} alt="Mysql" /></a>
                                <h5>Relational Database Management </h5>
                            </div>
                            <div className="item">
                                <a href='https://code.visualstudio.com/' target="_blank"><img src={vs} alt="Visual Studio Code" /></a>
                                <h5>Visual Studio Code</h5>
                            </div>
                            <div className="item">
                                <a href='https://getbootstrap.com/' target="_blank"><img src={bootstrap} alt="Bootstrap" /></a>
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <a href='https://sass-lang.com/' target="_blank" ><img src={sass} alt="Sass" /></a>
                                <h5>CSS Sass</h5>
                            </div>
                            <div className="item">
                                <a href='https://powerbi.microsoft.com/en-au/' target="_blank"><img src={powerbi} alt="Power bi" /></a>
                                <h5>Data Visualization</h5>
                            </div>
                            <div className="item">
                                <a href='https://powerbi.microsoft.com/en-au/' target="_blank"><img src={scrum} alt="Scrum" /></a>
                                <h5>Scrum certified</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="left" />
    </section>
  )
}