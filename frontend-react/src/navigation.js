import {Navbar, Nav} from "react-bootstrap";
import React, {Component} from "react";
import { Button } from '@rmwc/button';
class Navigation extends Component{
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" id='navBar'>
              <Navbar.Brand href="#home">MOTOR SERVICES</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
              {this.props.login &&(
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Button raised>Buy</Button>
                  </Nav>
                </Navbar.Collapse>
              )}
            </Navbar>
        );
    }
}

export default Navigation;