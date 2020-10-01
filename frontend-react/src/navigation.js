import {Navbar, Nav} from "react-bootstrap";
import React, {Component} from "react";
import { Button } from '@rmwc/button';
class Navigation extends Component{
    render() {
      console.log(this.props.cart)
        return (
            <Navbar bg="dark" variant="dark" expand="lg" id='navBar'>
              <Navbar.Brand href="#home">MOTOR SERVICES</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
              {this.props.login &&(
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Button raised className='navButton' onClick={(e) => {
                      this.props.handleCartButton(e)
                    console.log('test')
                    }}>Cart <span>{this.props.cart.length}</span></Button>
                    <Button raised onClick={() => this.props.handleLogout()} className='navButton'>Logout
                    </Button>
                  </Nav>
                </Navbar.Collapse>
              )}
            </Navbar>
        );
    }
}

export default Navigation;