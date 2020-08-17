// React
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// Style
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
// Assets
import ResumePM from './documents/ElisabethCase-PM.pdf';
import ResumeSWE from './documents/ElisabethCase-SWE.pdf';

class Tagline extends Component {
  render() {
    return (
      <div className="tagline">
            <h1>Hey there! I'm Lisi :)</h1>
            <h2>Informatics student at UW seeking PM/SWE internships.</h2>
            <Resumes />
        </div>
    );
  }
}

class Resumes extends Component {
  render() {
    return (
      <div>
        <a href={ResumePM} target = "_blank" type="button" className="resume btn btn-light btn-sm">Resume - PM</a>
        <a href={ResumeSWE} target = "_blank" type="button" className="resume btn btn-light btn-sm">Resume - SWE</a>
      </div>
    );
  }
}

export default Tagline;