import React from 'react'
import {Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {LinkContainer} from "react-router-bootstrap"

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
           <Navbar.Brand>Shopper</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         
         
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link  >Products</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link > <i className="fa-solid fa-cart-arrow-down me-1"></i>Cart</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Access" id="collasible-nav-dropdown">
              <LinkContainer to="/register">
                 <NavDropdown.Item> <i className="fa-solid fa-user me-1"></i>Register</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/login">
                <NavDropdown.Item><i className="fa-solid fa-user me-1"></i>
               Login
              </NavDropdown.Item>
              </LinkContainer>
              
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
        </Nav>
          <Nav className="">
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search products"
                        className="me-2 rounded-4"
                        aria-label="Search"
                    />
                    <Button variant="outline-success" className="rounded-4">Search</Button>
               </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
