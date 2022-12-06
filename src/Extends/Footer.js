import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  brands,
  solid,
  regular,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";
import paypal from "../images/paypal.png";
import visa from "../images/visa-card.png";
import master from "../images/mastercard.png";
import ebay from "../images/ebay.png";

// LOGO
// import sitelogo from '../Assets/Logo.png';

function Footer() {
  return (
    <div className="footer">
      <Container>
        <div className="upper">
          <Row>
            <Col lg={2} md={12} sm={12}>
              <div className="colm">
                <div className="heading">
                  <p>Customer</p>
                </div>
                <div className="links">
                  <ul>
                    <li>
                      <Link to={"/"}>Contact Us</Link>{" "}
                    </li>
                    <li>
                      <Link to={"/"}>Privacy Policy</Link>{" "}
                    </li>
                    <li>
                      <Link to={"/"}>Terms Conditions</Link>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={2} md={12} sm={12}>
              <div className="colm">
                <div className="heading">
                  <p>Site Links</p>
                </div>
                <div className="links">
                  <ul>
                    <li>
                      <Link to={"/"}>Lorem Ipsum</Link>{" "}
                    </li>
                    <li>
                      <Link to={"/"}>Dolor Sit Amet</Link>{" "}
                    </li>
                    <li>
                      <Link to={"/"}>Consecteture</Link>{" "}
                    </li>
                    <li>
                      <Link to={"/"}>Adipiscing Elite</Link>{" "}
                    </li>
                    <li>
                      <Link to={"/"}>Is Dummy Text</Link>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={2} md={12} sm={12}>
              <div className="colm">
                <div className="heading">
                  <p>My Account</p>
                </div>
                <div className="links">
                  <ul>
                    <li>
                      <Link to={"/"}>Lorem Ipsum</Link>{" "}
                    </li>
                    <li>
                      <Link to={"/"}>Dolor Sit Amet</Link>{" "}
                    </li>
                    <li>
                      <Link to={"/"}>Consecteture</Link>{" "}
                    </li>
                    <li>
                      <Link to={"/"}>Adipiscing Elite</Link>{" "}
                    </li>
                    <li>
                      <Link to={"/"}>Is Dummy Text</Link>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={2} md={12} sm={12}>
              <div className="colm">
                <div className="heading">
                  <p>Categories</p>
                </div>
                <div className="links">
                  <ul>
                    <li>
                      <Link to={"/"}>Lorem Ipsum</Link>{" "}
                    </li>
                    <li>
                      <Link to={"/"}>Dolor Sit Amet</Link>{" "}
                    </li>
                    <li>
                      <Link to={"/"}>Consecteture</Link>{" "}
                    </li>
                    <li>
                      <Link to={"/"}>Adipiscing Elite</Link>{" "}
                    </li>
                    <li>
                      <Link to={"/"}>Is Dummy Text</Link>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={4} md={12} sm={12}>
              <div className="colm contact-us">
                <div className="heading">
                  <p>Contact us</p>
                </div>
                <div className=" links">
                  <ul>
                    <li>
                      <div>
                        {" "}
                        <FontAwesomeIcon icon={solid("phone")} />{" "}
                      </div>
                      <div>
                        <Link to={"/"}>Phone : (123) 456-7891</Link>
                      </div>
                    </li>
                    <li>
                      <div>
                        {" "}
                        <FontAwesomeIcon icon={solid("location-dot")} />
                      </div>
                      <div>
                        <Link to={"/"}>
                          Address : 47 East Main Street lorem ispum, NJ 123456
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div>
                        {" "}
                        <FontAwesomeIcon icon={solid("envelope")} />
                      </div>
                      <div>
                        <Link to={"/"}>Email : info@dummyexample.com</Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <hr className="footer-middle-border" />
        <div className="middle">
          <Row>
            <Col lg={4}>
              <div className="colm ">
                <div className="heading">
                  <p>Sign Up And Save! </p>
                </div>
                <div className="input-sec-footer">
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Enter Email"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <Button id="basic-addon2">SUBMIT</Button>
                  </InputGroup>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="colm middle-child">
                <div className="heading">
                  <p>We Accept</p>
                </div>
                <div className="content">
                  <ul>
                    <li>
                      <Link to={"/"}>
                        <img src={visa} />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <img src={master} />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <img src={paypal} />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <img src={ebay} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="colm middle-child get-connected">
                <div className="heading">
                  <p>Get Connected</p>
                </div>
                <div className="content">
                  <ul>
                    <li>
                      <Link to={"/"} className="facebook">
                        <FontAwesomeIcon icon={brands("facebook-f")} />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}  className="twitter">
                        <FontAwesomeIcon icon={brands("twitter")} />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}  className="google">
                        <FontAwesomeIcon icon={brands("google-plus")} />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}  className="linkedin">
                        <FontAwesomeIcon icon={brands("linkedin-in")} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="lower">
        <Container>
          <div>
            <p>©copyright2021@DOMINATOR-All Rights Reserved</p>
          </div>
          <div>
            <p>Terms & Conditions | Privacy Policy</p>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
