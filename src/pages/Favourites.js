import React, { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";
import ProjectCards from "../components/Projects/ProjectCards";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Favoritos() {
  const { favoritos, RestablecerFavoritos, cantidadFavoritos } = useContext(
    FavouritesContext
  );

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
          <h1 className="pt-5" style={{ fontWeight: "bold", color: "white", marginTop: 50 }}>
            FAVORITOS
          </h1>

          {cantidadFavoritos > 0 ? (
            <Button className="m-4" onClick={() => RestablecerFavoritos()} variant="primary">
              Restablecer Favoritos
            </Button>
          ) : (
            <h1 className="pt-5" style={{ color: "white", fontSize: 25 }}>
              ... añade un proyecto a favoritos para verlo aquí ...
            </h1>
          }
        </div>
        <div className="row">
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {favoritos.map((proyecto, index) => {
              return (
                <Col md={4} className="project-card" key={proyecto.id}>
                  <ProjectCards
                    id={proyecto.id}
                    imgPath={proyecto.imagen}
                    isBlog={false}
                    title={proyecto.titulo}
                    description={proyecto.descripcion}
                    ghLink={proyecto.ghLink}
                    demoLink={proyecto.demoLink}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
}
