import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">BLOG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ fontWeight: "bold" }}>
              Home
            </Nav.Link>
            <Nav.Link href="/about" style={{ fontWeight: "bold" }}>
              About Us
            </Nav.Link>
            <NavDropdown
              title="Follow us"
              id="basic-nav-dropdown"
              className="d-flex justify-content-center"
            >
              <NavDropdown.Item
                href="https://www.facebook.com/ramesh.boda.39904"
                target="_blank"
                className="d-flex justify-content-center"
              >
                {" "}
                <CiFacebook size={25} />
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.instagram.com/_ramesh_.02/"
                target="_blank"
                className="d-flex justify-content-center"
              >
                <CiInstagram size={25} />
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://twitter.com/BRamesh27047"
                target="_blank"
                className="d-flex justify-content-center"
              >
                <CiTwitter size={25} />{" "}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
