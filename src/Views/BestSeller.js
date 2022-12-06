import React from "react";
import { Container,Row ,Col } from "react-bootstrap";

const BestSeller = () => {
  return (
    <section class="best-seller">
      <Container fluid>
        <div class="content">
          <div class="heading">
            <p>BEST SELLER</p>
          </div>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <div class="best-seller-left">
                <p>PRODUCT NAME HERE</p>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div class="best-seller-right">
                <p>PRODUCT NAME HERE</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default BestSeller;
