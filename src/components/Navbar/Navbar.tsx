import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Button, Form, Nav, FormControl } from 'react-bootstrap';
const navBar = () => (
    <Navbar bg="light" variant="light">
        <Navbar.Brand as={Link} to="/" >
            <img
                src="/Images/Logo/LogoClear.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            {/* <LinkContainer to="/">
                <Nav.Link >Home</Nav.Link>
            </LinkContainer> */}

            {/* <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#farmers">Farmers</Nav.Link>
            <Nav.Link href="#aboutUs">About Us</Nav.Link> */}

            <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
            {/* <Nav.Link as={Link} to="/item-details/:itemId">Item Details</Nav.Link> */}
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>

            {/* <Link to="/">Gallery</Link>
            <Link to="/checkout">Checkout</Link>
            <Link to="/itemdetails">Item Details</Link>
            <Link to="/cart">Cart</Link> */}
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
        </Form>
        <Nav className="mr-auto">
            <Nav.Link href="#register">Register</Nav.Link>
            <Nav.Link href="#login">Log In</Nav.Link>
        </Nav>
    </Navbar>
);
export default navBar;