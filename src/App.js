import {
  Container,
  Row,
  Col,
  Carousel,
  Nav,
  Tab,
  Sonnet,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import React, { useState } from "react";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// SLICK
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

import ScrollToTop from "./Views/ScrollToTop/Index";
import MySlider from "./Views/MySlider";
import clock from "./images/clock.png";
import screen from "./images/screen.png";
import calender from "./images/calender.png";
import Home from "./Views/Home";
import MyAbout from "./Views/MyAbout";
import Products from "./Views/Products";
import BoxerSec from "./Views/BoxerSec";
import OurProducts from "./Views/OurProducts";
import SixthSec from "./Views/SixthSec";
import BestSeller from "./Views/BestSeller";
import Header from "./Extends/Header";
import Footer from "./Extends/Footer";
import MyModal from "./Views/MyModal";

// AOS.init({
//     offset: 200,
//     duration: 600,
//     easing: 'ease-in-sine',
//     delay: 200,
// });

class App extends React.Component {
  render() {
    return (
      <div>
        <header className="pageheader">
        <Header />
      </header>
        <Home />
       <MyModal/>
        <MyAbout />
        <Products />
        <BoxerSec />
        <OurProducts />
        <SixthSec />
        <BestSeller />
        <MySlider />
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;

