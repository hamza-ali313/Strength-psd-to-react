import React, { Component, useEffect } from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import Header from "./Extends/Header";
import Footer from "./Extends/Footer";
import reportWebVitals from "./reportWebVitals";
import { Container, Row, Col } from "react-bootstrap";
import ProductDetail from "./Views/ProductDetail";

// IMPORT PAGES
import Aboutus from "./Views/Aboutus/Index";
import ScrollToTop from "./Views/ScrollToTop/Index";
import { Store } from "./Redux/Store";
import { Provider } from "react-redux";
import Test from "./Views/Test";
import Cocktails from "./Views/Cocktails";

// NEW
function Main() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* <App /> */}
        <Provider store={Store}>
      <Routes>
          <Route path="/" element={<App />} className="ppp" />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/test" element={<Test />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
        </Provider>
    </BrowserRouter>
  );
}
ReactDOM.render(<Main />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
