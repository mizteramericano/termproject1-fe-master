// NavbarCustom.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './stylesheet/navbar.css';

const NavbarCustom = () => {
    return (
        <Navbar expand="lg" className="custom-navbar">

            <Navbar.Brand as={Link} to="/">
                <img
                    src="/images/logo-removebg-preview.png" // ใส่ path โลโก้ของคุณ
                    alt="Store Logo"
                    className="store-logo"
                />
                BuildSkin
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/cate/2">
                        Skincare
                    </Nav.Link>
                    <Nav.Link as={Link} to="/cate/1">
                        Makeup
                    </Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>

        </Navbar>
    );
};

export default NavbarCustom;