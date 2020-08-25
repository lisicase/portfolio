// React
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Style
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
// Components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Navigation extends Component {
    render() {
      return (
        <header>
          <Navbar>
            <Navbar.Brand href="#">ELISABETH (LISI) CASE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse className="justify-content-end">
            <Nav className="mr-auto">
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
      );
    }
  }

  export default Navigation;