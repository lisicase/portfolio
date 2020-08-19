// React
import React, { Component } from 'react';
import _ from 'lodash';
// Style
import './style.css';
// Assets

class ProjectPage extends Component {
  constructor(props){
    super(props);
    this.state = {project: undefined};
  }

  componentDidMount(){
    let projectId = this.props.match.params.projectId;
    console.log(projectId);

    let projectObj =  _.find(this.props.projects, {id: projectId});
    this.setState({project: projectObj});
  }

  render() {
    let project = this.state.project;
    if(!project) return <div className="flex-container"><p>No project specified.</p></div>;

    return (
      <div className="flex-container">
        <div className="col content-column" style={{alignItems:"center"}}>
          <Header title={project.title} context={project.context} timeframe={project.timeframe} 
          project={project.project} tools={project.tools} />
          <Summary img={project.img_src} alt={project.alt} summary={project.summary} />
          <Reflection reflection={project.reflection} />
        </div>
      </div>
    );
  }
}

class Header extends Component {
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
      <header>
        <h1 className="page-title">{this.props.title}</h1>
        <h2 className="subtitle page-title page">{this.props.context} | {this.props.timeframe}</h2>
        {project}
        {tools}
      </header>
    );
  }
}

class Summary extends Component {
  render() {
    return (
      <>
      <h3 className="page-section">Summary</h3>
      <div id="flex-left-right">
        <div id="flex-left">
          <img src={this.props.img} alt={this.props.alt} />
        </div>
        <div id="flex-right">
          <div className="card-body">
            <p className="card-text">In this project, I...</p>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius nisi urna,
             a consectetur tortor elementum vitae. Aenean in iaculis nulla. Suspendisse id tempus tellus. Suspendisse eleifend 
             posuere lorem at scelerisque. Aliquam erat volutpat. Cras ultricies urna a nunc tincidunt, a laoreet ligula tincidunt. 
             Curabitur tristique euismod lacus a egestas. Vivamus nulla tellus, molestie ut diam ut, porttitor tempor mauris. 
             Proin a lacinia dolor, quis efficitur urna. Ut non ultricies lacus. Nullam sodales risus ipsum, 
             congue luctus neque pellentesque non.</p>
            <p className="card-text">Pellentesque bibendum quis ante ut sodales. Curabitur hendrerit ullamcorper nibh. Praesent ac felis at nulla 
              varius elementum quis sed sem. Phasellus justo ex, viverra non varius a, porta sed nunc. Pellentesque bibendum molestie mauris.</p>
          </div>
        </div>
      </div>
      </>
    );
  }
}

class Reflection extends Component {
  render() {
    return (
      <>
      <h3 className="page-section">Reflection</h3>
      <p className="card-text">I learned...</p>
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius nisi urna,
        a consectetur tortor elementum vitae. Aenean in iaculis nulla. Suspendisse id tempus tellus. Suspendisse eleifend 
        posuere lorem at scelerisque. Aliquam erat volutpat. Cras ultricies urna a nunc tincidunt, a laoreet ligula tincidunt. 
        Curabitur tristique euismod lacus a egestas. Vivamus nulla tellus, molestie ut diam ut, porttitor tempor mauris. 
        Proin a lacinia dolor, quis efficitur urna. Ut non ultricies lacus. Nullam sodales risus ipsum, 
        congue luctus neque pellentesque non.</p>
      <p className="card-text">Pellentesque bibendum quis ante ut sodales. Curabitur hendrerit ullamcorper nibh. Praesent ac felis at nulla 
        varius elementum quis sed sem. Phasellus justo ex, viverra non varius a, porta sed nunc. Pellentesque bibendum molestie mauris.</p>
      </>
    );
  }
}


export default ProjectPage;