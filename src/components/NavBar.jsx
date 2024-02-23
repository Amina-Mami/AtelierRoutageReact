import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/events" activeClassName="active">
            MyEvents
          </Nav.Link>
          <Nav.Link as={NavLink} to="/event" activeclassname="active">
            Events
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
