// React
import React, { Component } from 'react';
// Style
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
// Components
import Card from 'react-bootstrap/Card';


class PortfolioCards extends Component {
  render() {
    return (
      <AllPortfolioCards projects={this.props.projects} />
    );
  }
}

class AllPortfolioCards extends Component {
  render() {
    let allProjects = this.props.projects.map((project) => {
      return <span key={project.id}>
        <EPortfolioCard title={project.title} context={project.context} description={project.description} 
        project={project.project} tools={project.tools} img={project.img_src} alt={project.alt} />
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

class EPortfolioCard extends Component {
  render() {
    let project = <span></span>;
    if (this.props.project !== "") {
      project = <p className="card-text"><strong>Project: </strong>{this.props.project}</p>;
    }
    let tools = <span></span>;
    if (this.props.tools !== "") {
      tools = <p className="card-text"><strong>Tools: </strong>{this.props.tools}</p>;
    }
    return (
        <>
        <div className="shadow card">
          <div id="flex-left-right">
            <div id="flex-left">
              <img src={this.props.img} alt={this.props.alt} />
            </div>
            <div id="flex-right">
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
        <div><p></p></div>
        <div className="shadow card">
          <div className="card-horizontal">
            <div className="img-square-wrapper">
              <img className="cardImg" src={this.props.img} alt={this.props.alt}/>
            </div>
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <h6 className="subtitle">{this.props.context}</h6>
              {project}
              {tools}
              <a href="#" className="btn btn-light">Learn more</a>
            </div>
          </div>
        </div>
        </>
    );
  }
}

class DPortfolioCard extends Component {
  render() {
    let project = <span></span>;
    if (this.props.project !== "") {
      project = <p className="card-text"><strong>Project: </strong>{this.props.project}</p>;
    }
    let tools = <span></span>;
    if (this.props.tools !== "") {
      tools = <p className="card-text"><strong>Tools: </strong>{this.props.tools}</p>;
    }
    return (
        <div className="shadow card">
          <div className="card-horizontal">
            <div className="img-square-wrapper">
              <img className="cardImg" src={this.props.img} alt={this.props.alt}/>
            </div>
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <h6 className="subtitle">{this.props.context}</h6>
              {project}
              {tools}
              <a href="#" className="btn btn-light">Learn more</a>
            </div>
          </div>
        </div>
    );
  }
}

/*
<div className="card">
          <div className="card-horizontal">
            <div className="img-square-wrapper">
              <img className="" src="http://via.placeholder.com/300x180" alt="Card image cap"/>
            </div>
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
*/

class PortfolioCard extends Component {
  render() {
    let project = <span></span>;
    if (this.props.project !== "") {
      project = <p className="card-text"><strong>Project: </strong>{this.props.project}</p>;
    }
    let tools = <span></span>;
    if (this.props.tools !== "") {
      tools = <p className="card-text"><strong>Tools: </strong>{this.props.tools}</p>;
    }
    return (
      <div className="shadow card">
        <div className="row">
          <div className="col"><img className="card-img-top" src={this.props.img} alt="Website preview"/>
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

class BPortfolioCard extends Component {
  render() {
    return (
      <Card style={{ width: '50rem' }} className="shadow card">
        <div className="col"><Card.Img variant="top" src="/img/chronicle/cover2.png" /></div>
        <div className="col"><Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body></div>
      </Card>
    );
  }
}

class CPortfolioCard extends Component {
  render() {
    return (
      <div className="card flex-row flex-wrap">
        <div className="card-header border-0">
            <img src="/img/chronicle/cover2.png" alt=""/>
        </div>
        <div className="card-block px-2">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Description</p>
        </div>
        <div className="w-100"></div>
        <div className="card-footer w-100 text-muted">
        </div>
      </div>
    );
  }
}

export default PortfolioCards;