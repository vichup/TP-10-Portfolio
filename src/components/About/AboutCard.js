import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola, soy <span className="purple">Vicente Muggeri </span>
            naci en  <span className="purple"> Buenos Aires, Argentina.</span>
            <br /> soy un estudiante de ort del ultimo año en la especialida de informatica
            <br />
            <br />
            <br />
            Aca les dejo algunas cosas que me gustan ahacer, ademas de programar!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar juegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Escrinir vlogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
