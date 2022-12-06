import React from "react";
import { Container, Row, Col, CardGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import blackGlove from "../images/blackGloves.png";
import brownGloves from "../images/brownGloves.png";
import belt from "../images/belt.png";

const BoxerSec = () => {
  
  return (
    <div className="boxing-gloves">
      <Container fluid>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <div className="black-gloves">
              <div className="heading">
                <p>THIS SEASON’S LATEST FIGHTING STYLES</p>
                <h2>New Arrivals</h2>
              </div>
              <div className="img-sec">
                <img src={blackGlove} />
              </div>
              <div className="text">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                  nam ut dicta suscipit aliquam nostrum.
                </p>
              </div>
              <div className="btn">
                <Link to={"/"}>SHOP NOW</Link>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <div className="card-sec">
              <CardGroup>
                <Card>
                  <Card.Img className="card-img" src={belt} />
                  <Card.Body>
                    <Card.Title>YOUR HEADING HERE</Card.Title>
                    <Card.Text>
                      Some example text some example text. John Doe is an
                      architect and engineer
                    </Card.Text>
                    <div className="btn">
                      <Link to={"/"}>SHOP NOW</Link>
                    </div>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body className="arrow-after">
                    <Card.Title>YOUR HEADING HERE</Card.Title>
                    <Card.Text>
                      Some example text some example text. John Doe is an
                      architect and engineer
                    </Card.Text>
                    <div className="btn">
                      <Link to={"/"}>SHOP NOW</Link>
                    </div>
                  </Card.Body>
                  <Card.Img className="card-img" src={brownGloves} />
                </Card>
              </CardGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BoxerSec;
