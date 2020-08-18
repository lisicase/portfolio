// React
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Style
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
// Components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import PortfolioCards from './PortfolioCards.js';
import Tagline from './Tagline.js';
import ProjectPage from './ProjectPage.js';
import About from './About.js';
// Assets
import { FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

class App extends Component {
  render() {
    let renderPortfolio = (props) => <><Tagline/><PortfolioCards {...props} projects={this.props.projects} /></>
    let renderProject = (props) => <ProjectPage {...props} projects={this.props.projects} />

    return (
      <>
      <NavBar />
      <Switch>
        <Route exact path="/portfolio" render={renderPortfolio} />
        <Route path="/experience" component={Experience} />
        <Route path="/about" component={About} />
        <Route path="/portfolio/:projectId" render={renderProject} />
        <Redirect to="/portfolio" />
      </Switch>
      <Footer />
      </>
    );
  }
}

class Experience extends Component {
  render() {
    return (
      <p>My Experience page is currently in progress. Thank you for your patience! :)</p>
    );
  }
}

class NavBar extends Component {
  render() {
    return (
      <header>
        <Navbar>
          <Navbar.Brand href="/"><h1 className="nav-name">ELISABETH (LISI) CASE</h1></Navbar.Brand>
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
        <div className="container text-center">
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
