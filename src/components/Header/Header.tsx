import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import header from "./Header.module.css";

const Header = () => {
  return (
    <div className={header.headerMain}>
      <Container fluid>
        <Row>
          <Col xs={12} sm={4} md={4}>
            <div className={header.logoMain}>
              <img src='images/logo1.png' alt="" />
            </div>
          </Col>
          <Col xs={12} sm={8} md={8}>
            <ul className={header.navBar}>
              <li className={header.navBarItem}>
                <Link to="/">Home</Link>
              </li>
              <li className={header.navBarItem}>
                <Link to="products">Products</Link>
              </li>
              <li className={header.navBarItem}>
                <Link to="about-us">About</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
