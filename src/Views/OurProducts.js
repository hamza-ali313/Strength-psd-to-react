import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import  twelve  from "../images/12.png"
import eleven from"../images/11.png"
import ten from "../images/10.png"
import nine from "../images/9.png"
import { Link } from 'react-router-dom'

const OurProducts = () => {
  return (
    <div>
    <section className="our-product-sec">
        <Container fluid>
            <div className="our-product-sec-content">
                <div className="our-product-heading">
                    <h1>OUR PRODUCTS</h1>
                </div>
                <Row>
                    <Col lg={3} md={12} sm={12}>
                        <div className="our-product-card">
                            <div className="our-product-card-img">
                                <img src={nine}/>
                            </div>
                            <div className="our-product-card-disc">
                                <p>Your product Name</p>
                                <h3>$35.00</h3>
                            </div>
                            <div className="shop-now">
                                <Link to={"products/1"}>SHOP NOW</Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={12} sm={12}>
                        <div className="our-product-card">
                            <div className="our-product-card-img">
                                <img src={ten}/>
                            </div>
                            <div className="our-product-card-disc">
                                <p>Your product Name</p>
                                <h3>$35.00</h3>
                            </div>
                            <div className="shop-now">
                            <Link to={"products/2"}>SHOP NOW</Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={12} sm={12}>
                        <div className="our-product-card">
                            <div className="our-product-card-img">
                                <img src={eleven}/>
                            </div>
                            <div className="our-product-card-disc">
                                <p>Your product Name</p>
                                <h3>$35.00</h3>
                            </div>
                            <div className="shop-now">
                            <Link to={"products/3"}>SHOP NOW</Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={12} sm={12}>
                        <div className="our-product-card">
                            <div className="our-product-card-img">
                                <img src={twelve}/>
                            </div>
                            <div className="our-product-card-disc">
                                <p>Your product Name</p>
                                <h3>$35.00</h3>
                            </div>
                            <div className="shop-now">
                            <Link to={"products/4"}>SHOP NOW</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </section>
    </div>
  )
}

export default OurProducts