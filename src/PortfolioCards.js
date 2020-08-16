// React
import React, { Component } from 'react';
// Style
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
// Components


class PortfolioCards extends Component {
  render() {
    return (
      <div className="col content-column">
        <AllPortfolioCards projects={this.props.projects} />
      </div>
    );
  }
}

class AllPortfolioCards extends Component {
  render() {
    let allProjects = this.props.projects.map((project) => {
      console.log(project.id)
        return <span key={project.id}>
          <PortfolioCard title={project.title} context={project.context} description={project.description} 
          project={project.project} tools={project.tools} img={project.img_src} />
          <div><p></p></div>
          </span>
    })

    return (
      <div className="col content-column">
        {allProjects}
      </div>
    );
  }
}

class PortfolioCard extends Component {
  render() {
    let project = <span></span>;
    if (this.props.project != "") {
      project = <p className="card-text"><strong>Project: </strong>{this.props.project}</p>;
    }
    let tools = <span></span>;
    if (this.props.tools != "") {
      tools = <p className="card-text"><strong>Tools: </strong>{this.props.tools}</p>;
    }
    return (
      <div className="shadow card">
        <div className="row">
          <div className="col"><img className="card-img-top" src="./img/chronicle/cover2.png" alt="Website preview"/>
            <div className="col">
              <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <h6 className="subtitle">{this.props.context}</h6>
                {project}
                {tools}
                <a href="#" className="btn btn-light">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioCards;
