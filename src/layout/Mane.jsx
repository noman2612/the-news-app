import React from "react";
import Home from "../pages/home/Home/Home";
import Heder from "../pages/shread/Heder/Heder";
import Footer from "../pages/shread/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../pages/shread/LeftNav/LeftNav";
import RightNav from "../pages/shread/RightNav/RightNav";
import moment from 'moment';
const Main = () => {
  return (
    <div>
      <Heder></Heder>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}><h1 className="text-center">main content coming</h1></Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
