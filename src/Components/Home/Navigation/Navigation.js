import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import "./Navigation.css";

const Navigation = () => {
    return (
        // <div className="nav-div">
        //     <Navbar bg="dark" variant="dark" className="p-0 nav-bar">
        //         <Container>
        //             <Navbar.Brand href="#home">
        //                 <div class="logo">
        //                     <a href="#home">
        //                         Portfo<span>lio.</span>
        //                     </a>
        //                 </div>
        //             </Navbar.Brand>

        //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //             <Navbar.Collapse id="basic-navbar-nav">
        //                 <Nav className="me-auto">
        //                     <Nav.Link href="#home">Home</Nav.Link>
        //                     <Nav.Link href="#link">Link</Nav.Link>
        //                     <Nav.Link href="#link">Link</Nav.Link>
        //                     <Nav.Link href="#link">Link</Nav.Link>
        //                 </Nav>
        //             </Navbar.Collapse>
        //         </Container>
        //     </Navbar>
        // </div>
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
                        <Nav.Link href="#home" className='text-light'>Home</Nav.Link>
                        <Nav.Link href="#projects" className='text-light'>Projects</Nav.Link>
                        <Nav.Link href="#about" className='text-light'>About Me</Nav.Link>
                        <Nav.Link href="#contact" className='text-light'>Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
