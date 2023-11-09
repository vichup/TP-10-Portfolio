import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../Assets/home-main.svg";
import Particle from "../components/Particle";
import PersonalIntroductionSection from "../components/Home/PersonalIntroductionSection";
import Type from "../components/Home/Type";
import FeaturedProjectsSection from "../components/Home/FeaturedProjectsSection";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hola a todos{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
               Yo soy
                <strong className="main-name"> Vicente Muggeri</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <PersonalIntroductionSection />
      <FeaturedProjectsSection/>
    </section>
  );
}

export default Home;
