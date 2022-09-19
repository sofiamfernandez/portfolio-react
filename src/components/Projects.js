import React from 'react';

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/img1.png";
import projImg2 from "../assets/img/img2.png";
import projImg3 from "../assets/img/img3.png";
import projImg4 from "../assets/img/img4.png";
import projImg5 from "../assets/img/img5.png";
import projImg6 from "../assets/img/img6.png";



import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Full-stack",
      description: "Design & Development",
      imgUrl: projImg1,
      button: "Go!",
      link: 'https://www.florianbourgine.com/',
    },
    {
      title: "Web design",
      description: "Design & Development",
      imgUrl: projImg2,
      button: "Go!",
      link: 'https://eve-cosplay-bootstrap.netlify.app/',
    },
    {
      title: "Full-stack",
      description: "Design & Development",
      imgUrl: projImg3,
      button: "Go!",
      link:'https://www.cofam.org.ar/',
    },
    {
      title: "Full-stack",
      description: "Design & Development",
      imgUrl: projImg4,
      button: "Go!",
      link:'https://minerosudaka.com/',
    },
    {
      title: "Dark mode",
      description: "Design & Development",
      imgUrl: projImg5,
      button: "Go!",
      link:'https://dark-mode-js-sass-bysofiafernandez.netlify.app/',
    },
    {
      title: "React memo",
      description: "Design & Development",
      imgUrl: projImg6,
      button: "Go!",
      link:'https://christmas-memo-react-app-bysofiafernandez.netlify.app/'
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Projects</h2>
                <p>Here are a few of my favorite projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web development</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Back-end</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Web design</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}