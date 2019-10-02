import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md" className="navbar">
          <Link to="/">
            <img src={logo} alt="Logo" className="image" />
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" className="nav-link text-light">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/about" className="nav-link text-light">
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/projects" className="nav-link text-light">
                  Projects
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contact" className="nav-link text-light">
                  Contact
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
