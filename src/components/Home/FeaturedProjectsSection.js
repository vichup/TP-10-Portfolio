import React, {useContext} from 'react'
import {CreationsContext} from "../../context/CreationsContext"
import ProjectCard from '../Projects/ProjectCards';
import { Col, Row } from 'react-bootstrap';

export default function FeaturedProjectsSection() {

    const { projects } = useContext(CreationsContext);
    const listaDestadada = projects.filter(item => item.id < 4);
  return (
    <div class="container text-center">

    <h1 style={{color:'white'}}>Featured Projects</h1>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
    {listaDestadada.map((project,index) => 
             
            
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
            </Col> 
            )}
            </Row>
    </div>
  )
}
