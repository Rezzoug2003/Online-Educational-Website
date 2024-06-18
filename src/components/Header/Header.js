import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <div className="sticky-top">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <h2 className=" d-flex align-items-center gap-1 logo">
              <i className="ri-pantone-line"></i> Learners.
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bn" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#home" className="nav-item active">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="nav-item">
                About
              </Nav.Link>
              <Nav.Link href="#link" className="nav-item">
                Courses
              </Nav.Link>
              <Nav.Link href="#link" className="nav-item">
                Pages
              </Nav.Link>
              <Nav.Link href="#link" className="nav-item">
                Blogs
              </Nav.Link>
              <div className="nav__right ms-lg-5">
                <p className="mb-0 d-flex align-items-center gap-2">
                  <i className="ri-phone-line"></i> +88 0123456789
                </p>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
