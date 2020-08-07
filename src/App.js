import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Footer />
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

class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="container text-center">
            <p>
              <FontAwesomeIcon icon={faCoffee} />
              <a href="mailto:casee@uw.edu"><FontAwesomeIcon icon={faEnvelopeSquare} className="contact-icon" size="xs" /></a>
              <a href="https://linkedin.com/in/elisabethcase"><i class="contact fa fa-linkedin-square fa-2x"></i></a>
              <a href="https://github.com/lisicase"><i class="contact fa fa-github-square fa-2x"></i></a>
            </p>
            <p>Copyright &copy; 2020. All rights reserved.</p>
        </div>
      </footer>
    );
  }
}

export default App;
