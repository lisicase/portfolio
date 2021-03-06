// React
import React, { Component } from 'react';
// Style
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
// Assets
import ResumePM from '../documents/ElisabethCase-PM-Resume.pdf';
import ResumeSWE from '../documents/ElisabethCase-SWE-Resume.pdf';

class Tagline extends Component {
  render() {
    return (
      <div className="tagline">
        <h1>Hey there! I'm Lisi :)</h1>
        <h2 className="subtitle">Informatics senior at UW pursing a career in PM/SWE</h2>
        <Resumes />
      </div>
    );
  }
}

class Resumes extends Component {
  render() {
    return (
      <div>
        <a href={ResumePM} target = "_blank" rel="noopener noreferrer" className="resume">
          <button className="resume btn btn-light btn-md">Resume - PM</button>
        </a>
        <a href={ResumeSWE} target = "_blank" rel="noopener noreferrer" className="resume">
          <button className="resume btn btn-light btn-md">Resume - SWE</button>
        </a>
      </div>
    );
  }
}

export default Tagline;