// React
import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
// Style
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
// Components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/experience" component={Experience} />
        <Route path="/about" component={About} />
        <Route path="/portfolio/:projectId" component={Project} />
        <Redirect to="/portfolio" />
    </Switch>
      <Footer />
    </div>
  );
}

class Portfolio extends Component {
  render() {
    return (
      <p>Portfolio</p>
    );
  }
}
class Experience extends Component {
  render() {
    return (
      <p>Experience</p>
    );
  }
}
class About extends Component {
  render() {
    return (
      <p>About</p>
    );
  }
}
class Project extends Component {
  render() {
    return (
      <p>Project</p>
    );
  }
}

class NavBar extends Component {
  render() {
    return (
      <header>
        <Navbar>
          <Navbar.Brand href="portfolio"><h1 className="nav-name">ELISABETH (LISI) CASE</h1></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="portfolio">Portfolio</Nav.Link>
            <Nav.Link href="experience">Experience</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
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
              <a href="mailto:casee@uw.edu"><FaEnvelopeSquare className="contact-icon" size="24" /></a>
              <a href="https://linkedin.com/in/elisabethcase"><FaLinkedin className="contact-icon" size="24" /></a>
              <a href="https://github.com/lisicase"><FaGithubSquare className="contact-icon" size="24" /></a>
            </p>
            <p>Copyright &copy; 2020. All rights reserved.</p>
        </div>
      </footer>
    );
  }
}

export default App;
