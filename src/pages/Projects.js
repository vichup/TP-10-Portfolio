import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCards";
import Particle from "../components/Particle";
import { CreationsContext } from "../context/CreationsContext";

function Projects() {

  const { projects } = useContext(CreationsContext);


  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis ultimos <strong className="purple">Trabajos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aca les dejo algunos Trabajos.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
            
          {projects.map((project,index) => {
                
              return (
                <>
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

                </>

              )


          })}
           
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
