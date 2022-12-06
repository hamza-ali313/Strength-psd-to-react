import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import withRocktough from "../images/withRocktough.png";
import Rocktough from "../images/Rocktough.png";
import { Link } from "react-router-dom";

const SixthSec = () => {
  return (
    <>
      <section className="sixth">
        <Container fluid>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <div className="images-sec">
                <div className="rocktough">
                  <img src={Rocktough} />
                </div>
                <div className="withRocktough">
                  <img src={withRocktough} />
                </div>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="text">
                <div className="main-text">
                  <p>Nobody can hurt me 
                  <br/>without my
                  </p>
                </div>
                <div className="permission-text">
                  <p>PERMISSION</p>
                </div>
                <div className="btn">
                  <Link to={"/"}>SHOP NOW</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SixthSec;
