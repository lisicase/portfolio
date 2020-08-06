import React, { Component } from 'react';
import './style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class NavBar extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="nav-link" href="portfolio.html"><h1 className="nav-name">ELISABETH (LISI) CASE</h1></a>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse"
                aria-expanded="false" aria-label="Toggle navigation">
                <span><i className="fa fa-bars"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="portfolio.html">Portfolio<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="experience.html">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about.html">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    );
  }
}

export default App;
