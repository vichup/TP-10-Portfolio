import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCards";
import Particle from "../components/Particle";
import leaf from "../Assets/Projects/leaf.png";
import emotion from "../Assets/Projects/emotion.png";
import editor from "../Assets/Projects/codeEditor.png";
import chatify from "../Assets/Projects/chatify.png";
import suicide from "../Assets/Projects/suicide.png";
import bitsOfCode from "../Assets/Projects/blog.png";

import { CreationsContext } from "../context/CreationsContext";

function Projects() {

  const { projects } = useContext(CreationsContext);


  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
            
          {projects.map((project,index) => {
                console.log(project)
              return (
                <>
                <Col md={4} className="project-card">
                   <ProjectCard
                   imgPath={project.image}
                   isBlog={false}
                   title={project.title}
                   description={project.description}
                   ghLink={project.ghLink}
                   demoLink={project.demoLink}
            />
            </Col>

                </>

              )


          })}
           
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
