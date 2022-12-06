import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const MyAbout = () => {
  return (
    <div className="about-sec">
      <Container>
        <div className="uppertext">
          <p>ABOUT US</p>
        </div>
        <div className="heading">
          <h1>Dominator</h1>
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="btn">
          <Link to={"/"}>LEARN MORE</Link>
        </div>
      </Container>
    </div>
  );
};

export default MyAbout;
