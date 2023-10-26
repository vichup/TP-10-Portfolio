import React, {useContext} from 'react'
import {CreationsContext} from "../../context/CreationsContext"
import ProjectCards from '../Projects/ProjectCards';
import { Col } from 'react-bootstrap';

export default function FeaturedProjectsSection() {

    const { projects } = useContext(CreationsContext);

  return (
    <div class="container">

    <h1 style={{color:'white'}}>Featured Projects</h1>
    {projects.map((project,index) => {
            
            {index < 4 ? (
                <Col md={4} className="project-card">
                   <ProjectCard
                   id={project.id}
                   imgPath={project.imagen}
                   isBlog={false}
                   title={project.title}
                   description={project.description}
                   ghLink={project.ghLink}
                   demoLink={project.demoLink}
            />
            </Col> ): <></>;
                }
            })}
    </div>
  )
}
