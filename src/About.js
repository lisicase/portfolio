// React
import React, { Component } from 'react';
// Style
import './style.css';

class About extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="col content-column" style={{alignItems:"center"}}>
          <div id="flex-left-right">
            <div id="flex-left">
              <img src="/img/lisi-case.jpeg" alt={"Headshot of Lisi"} style={{paddingTop:"0em"}} />
            </div>
            <div id="flex-right">
              <div className="card-body">
                <h1 className="page-title">Hi, I'm Lisi!</h1>
                <Summary />
                <Background />
                <FunFacts />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



class Summary extends Component {
  render() {
    return (
      <>
      <h3 className="page-section">Summary</h3>
      <p className="card-text">I'm a senior undergraduate student at the University of Washington studying Informatics and Interdisciplinary Honors,
      and an aspiring Project Manager / Software Engineer. I care about using information and designing products in creative and intuitive ways to 
      help people achieve their goals and accomplish positive change.</p>
      </>
    );
  }
}

class Background extends Component {
  render() {
    return (
      <>
      <h3 className="page-section">Background</h3>
      <p className="card-text">I entered UW two years early through the Robinson 
      Center's <a className="external-link" href="https://robinsoncenter.uw.edu/programs/uw-academy/">
      UW Academy</a> program. With so many intriguing opportunities at UW, 
      I have participated in some amazing Registered Student Organizations (RSOs) and become involved in research, teaching, and Husky leadership. 
      At the moment, I'm particularly enjoying programming for <a className="external-link" href="https://synbioforeveryone.org/Home">Synbio for Everyone</a> and 
      continuing to teach beginning programmers as a <a className="external-link" href="http://courses.cs.washington.edu/courses/cse14x/ta/">Computer Science TA</a>!</p>
      </>
    );
  }
}

class FunFacts extends Component {
  render() {
    return (
      <>
      <h3 className="page-section">Fun Facts</h3>
      <ul>
        <li>I have triple citizenship</li>
        <li>I'm an Alumna of the <a className="external-link" href="https://seattlegirlschoir.org/">Seattle Girls' Choir</a></li>
        <li>I've been playing piano (privately/professionally) for 15 years</li>
      </ul>
      </>
    );
  }
}


export default About;