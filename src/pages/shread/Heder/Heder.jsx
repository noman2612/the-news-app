import React from 'react';
import  logo from'../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
const Heder = () => {
    return (
        <Container>
            <div className='text-center mt-3'>
            <img src={logo} alt="" />
                <p className='mt-2'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY,")}</p>
            </div>
            <div className='d-flex  m-4'>
            <Button variant="danger">Latest</Button>
            <Marquee  speed={70} className='text-danger bg-gray'>
  I can be a React component, multiple React components, or just some text.
</Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="ligth">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home  </Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="secondary">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default Heder;