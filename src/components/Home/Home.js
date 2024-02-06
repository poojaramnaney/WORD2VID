import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading-name">
              Embrace the future of <br/>Learning
                
              </h1>

              <h5 style={{ marginLeft: 40 }}>
                A simple yet modern solution to Change your boring textbooks into exciting videos</h5>
            

              <div style={{ padding: 50, textAlign: "left" }}>
              <span className="wave" role="img" aria-labelledby="wave">
                  <button className="get-started">Get Started</button>
                </span>
                 
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
      <Home2 />
    </section>
  );
}

export default Home;
