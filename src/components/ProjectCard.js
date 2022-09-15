import React from 'react';
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,button }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br/>
          <button className='btn btn-dark'>{button}</button>
        </div>
      </div>
    </Col>
  )
}