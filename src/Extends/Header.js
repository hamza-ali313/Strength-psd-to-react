import React, { Component, useState } from "react";
import ReactDOM, { render } from "react-dom";
import { Link, NavLink } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  brands,
  solid,
  regular,
} from "@fortawesome/fontawesome-svg-core/import.macro";

// LOGO
// import sitelogo from '../Assets/Logo.png';
import ScrollToTop from "../Views/ScrollToTop/Index";
import MyModal from "../Views/MyModal";

function Header() {
  const [expanded, setExpanded] = useState(false);
  const setExpand = () => {
    setExpanded(false);
    // window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="upper-header">
        <Container>
          <div className="right">
            <div className="phone">
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("phone")} />
                (123) 456-7891
              </Link>
            </div>
            <div className="Email">
              <Link to={"/"}>
                <FontAwesomeIcon icon={solid("envelope")} />
                info@dummyexample.com
              </Link>
            </div>
          </div>
          <div className="left">
            <Link to={"/"}>
              <FontAwesomeIcon icon={solid("location-dot")} />
              Address: 123 Road lorem ipsum ABC street 123456
            </Link>
          </div>
        </Container>
      </div>

      <div className="main-header">
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand href="#home">
              <p>YOUR</p>
              <p><strong>LOGO HERE</strong></p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="main-navbar">
                <div className="header-search">
                  <form>
                    <input type="text" placeholder="search here" />
                    <button>
                      {" "}
                      <FontAwesomeIcon icon={solid("magnifying-glass")} />
                    </button>
                  </form>
                  <div className="icons">
                    <Link to={"/"}>
                      <FontAwesomeIcon icon={solid("user")} />
                    </Link>
                    <Link to={"/"}>
                      <FontAwesomeIcon icon={solid("envelope-open-text")} />
                    </Link>
                  </div>
                  {/* <MyModal
                    icon={<FontAwesomeIcon icon={solid("cart-shopping")} />}
                  /> */}
                </div>
                <div className="nav-links">
                  <Nav className="me-auto">
                    <NavLink
                      exact="true"
                      as={Link}
                      to={"/"}
                      onClick={setExpand}
                    >
                      HOME
                    </NavLink>
                    <NavLink
                      exact="true"
                      as={Link}
                      to={"/Aboutus"}
                      onClick={setExpand}
                    >
                      NEW
                    </NavLink>
                    <NavLink
                      exact="true"
                      as={Link}
                      to={"/test"}
                      onClick={setExpand}
                    >
                      MEN
                    </NavLink>
                    <NavLink
                      exact="true"
                      as={Link}
                      to={"/Aboutus"}
                      onClick={setExpand}
                    >
                      KIDS
                    </NavLink>
                    <NavLink
                      exact="true"
                      as={Link}
                      to={"/Aboutus"}
                      onClick={setExpand}
                    >
                      EQUIPMENT
                    </NavLink>
                    <NavLink
                      exact="true"
                      as={Link}
                      to={"/cocktails"}
                      onClick={setExpand}
                    >
                      COCKTAILS
                    </NavLink>
                    <NavLink
                      exact="true"
                      as={Link}
                      to={"/"}
                      onClick={setExpand}
                    >
                      CONTACT US
                    </NavLink>
                  </Nav>
                </div>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    </>
  );
}

export default Header;
