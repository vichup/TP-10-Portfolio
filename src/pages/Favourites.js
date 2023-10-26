import React, { useContext } from "react"
import {FavouritesContext} from "../context/FavouritesContext"
import ProjectCards from "../components/Projects/ProjectCards";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Favourites() {

 const { favourites, ResetFavoritos, cantidadFavoritos } = useContext(FavouritesContext);

  return (
    <>
    <div className="container">
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 className="pt-5" style={{ fontWeight: "bold", color:'white', marginTop: 50 }}>
        FAVOURITES
      </h1>




      {cantidadFavoritos > 0 ?   <Button
        className="m-4"
        onClick={() => ResetFavoritos()}
        variant='primary'
      >
        Clean favs
      </Button> : <h1 className="pt-5" style={{color:'white', fontSize:25}}>... add a proyect to favourites to see it here ...</h1>}
     
    </div>
    <div className="row">
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {favourites.map((project, index) => {

        return  (
        
        <>
         <Col md={4} className="project-card">
        <ProjectCards  id={project.id}
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
    </div>
  </div>
</>
  )
}
