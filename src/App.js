import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

class NavBar extends Component {
  render() {
    return (
      <header>
        <Navbar>
          <Navbar.Brand href="#portfolio"><h1 className="nav-name">ELISABETH (LISI) CASE</h1></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default App;
