import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle";
import { useParams } from 'react-router';
import axios from 'axios';
import { CreationsContext } from "../context/CreationsContext";


export default function ProjectDetail() {

    const { GetProyectById } = useContext(CreationsContext);
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [project, setProject] = useState([]);

    useEffect(async () => {



        setLoading(true);
        const proyecto = await GetProyectById(id)
        setProject(proyecto)
        setLoading(false);
        return;



    }, []);

    return (
        <Container fluid className="project-section">
            <Particle />
            <div className='container text-center'>

                <h1 className="project-heading pb-2">
                    {project.titulo}
                </h1>

                <p style={{color:'white', paddingBottom:10}}>{project.descripcion}</p>

                <img src={project.imagen} height="300px" width="auto" style={{borderRadius:10}}></img>
                <br></br>
                <button style={{ borderRadius:10}} className="mt-4 btn btn-primary">Add to favorites</button>
            </div>
        </Container>
    )
}
