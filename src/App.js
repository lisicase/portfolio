// React
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Style
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
// Components
import Navigation from './Navigation.js';
import PortfolioCards from './portfolio-page/PortfolioCards.js';
import Tagline from './portfolio-page/Tagline.js';
import ProjectPage from './portfolio-page/ProjectPage.js';
import About from './About.js';
// Assets
import { FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

class App extends Component {
  render() {
    let renderPortfolio = (props) => <><Tagline/><PortfolioCards {...props} projects={this.props.projects} /></>
    let renderProject = (props) => <ProjectPage {...props} projects={this.props.projects} />

    return (
      <>
      <Navigation />
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
      <div className="container text-center">
        <p>My Experience page is currently in progress. Thank you for your patience! :)</p>
      </div>
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
