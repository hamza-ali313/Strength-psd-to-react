import React,{useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import underwear from "../images/underware.png";
import sock from "../images/sock.png";
import belds from "../images/belds.png";
import axes from "../images/axes.png";

const Products = () => {
    // const [item,setItem]= useState(0);
    // const [cartArray,setCartArray]= useState([]);
    // const [quantity,setQuantity]= useState(0);
    // const [amountToPay,setAmountToPay]= useState(0);
    // console.log(cartArray)
    // function addToCart(item) {
    //     setCartArray()
    //     console.log(cartArray)
    //   }
  return (
    <div>
      <section class="products">
        <Container fluid>
          <div class="content">
            <div class="heading">
              <h2>PRODUCTS</h2>
            </div>
            <Row>
              <Col lg={3} md={12} sm={12}>
                <div class="card1">
                  <div class="img-sec">
                    <img src={sock} />
                  </div>
                  <div class="disc">
                    <p class="name">Your Product Name</p>
                    <p class="price">$35.00</p>
                  
                  </div>
                </div>
              </Col>
              <Col lg={3} md={12} sm={12}>
                <div class="card1">
                  <div class="img-sec">
                    <img src={belds} />
                  </div>
                  <div class="disc">
                    <p class="name">Your Product Name</p>
                    <p class="price">$35.00</p>
                   
                  </div>
                </div>
              </Col>
              <Col lg={3} md={12} sm={12}>
                <div class="card1">
                  <div class="img-sec">
                    <img src={axes} />
                  </div>
                  <div class="disc">
                    <p class="name">Your Product Name</p>
                    <p class="price">$35.00</p>
                 </div>
                 </div>
              </Col>
              <Col lg={3} md={12} sm={12}>
                <div class="card1">
                  <div class="img-sec">
                    <img src={underwear} />
                  </div>
                  <div class="disc">
                    <p class="name">Your Product Name</p>
                    <p class="price">$35.00</p>
                   
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Products;
// { var obj = {name:"Your Product Name",price:" $35.00" , img:{sock}}}