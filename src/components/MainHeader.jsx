import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const MainHeader = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* <Navbar.Brand href="/">MyApp</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" activeclassname="active">
              Welcome
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products" activeclassname="active">
              Products
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainHeader;
