import React, { useContext } from "react"
import {FavouritesContext} from "../context/FavouritesContext"
import ProjectCards from "../components/Projects/ProjectCards";

export default function Favourites() {

 const { favoritos, ResetFavoritos } = useContext(FavouritesContext);

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
      <h1 className="pt-5" style={{ fontWeight: "bold" }}>
        FAVOURITES
      </h1>
      <button
        className="m-4"
        onClick={() => ResetFavoritos()}
        style={{
          height: 50,
          width: 150,
          borderRadius: 10,
          backgroundColor: "#0a4275",
          fontWeight: "bold",
          color:'white'
        }}
      >
        Resetear Carrito
      </button>
    </div>
    <div className="row">
      
      {favoritos.map((project, index) => {

        return  (
        
        <>
        <ProjectCards  id={project.id}
                   imgPath={project.imagen}
                   isBlog={false}
                   title={project.title}
                   description={project.description}
                   ghLink={project.ghLink}
                   demoLink={project.demoLink}
                /> 
       
        </>
      
      
      )
      
      })}
    </div>
  </div>
</>
  )
}
