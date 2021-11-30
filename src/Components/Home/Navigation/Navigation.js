import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {
    return (
        
        <Navbar bg="dark" variation="light" expand="lg">
            <Container>
            <Navbar.Brand href="#home">
                             <div class="logo">
                                 <a href="#home">
                                     Portfo<span>lio.</span>
                                 </a>
                             </div>
                         </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center justify-content-center navbar-link">
                        <Link to="/home" className='text-light'>Home</Link>
                        <Nav.Link href="#projects" className='text-light'>Projects</Nav.Link>
                        <Link to="/about" className='text-light'>About Me</Link>
                        <Link to="/contact" className='text-light'>Contact Me</Link>
                        <Link to="/blogs" className='text-light'>Blogs</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
