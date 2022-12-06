import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import knagfoosuit from "../images/kangfoo-suit.png";
import underwear from "../images/2.png";
import withRokcktough from "../images/withRocktough.png";

const Home = () => {
  return (
    <div className="home-sec">
      <Container>
        <div className="heading">
          <p>
            find  your<span>strength</span>
          </p>
        </div>
        <div className="images">
          <Row>
            <Col lg={2} md={12} sm={12}>
              <div className="side-img red-short">
              <img src={underwear}/>
              </div>
            </Col>
            <Col lg={8} md={12} sm={12}>
              <div className="kangfoo-suit">
                <img src={knagfoosuit}/>
              </div>
            </Col>
            <Col lg={2} md={12} sm={12}>
              <div className="side-img red-bag">
              <img src={withRokcktough}/>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Home;
