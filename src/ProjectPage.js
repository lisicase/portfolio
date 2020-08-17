// React
import React, { Component } from 'react';
import _ from 'lodash';
// Style
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <h1 class="project-page">{this.props.title}</h1>
        <h2 className="subtitle project-page">{this.props.context} | {this.props.timeframe}</h2>
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
      <h3 class="project-page">Summary</h3>
      <div id="flex-left-right">
        <div id="flex-left">
          <img src={this.props.img} alt={this.props.alt} />
        </div>
        <div id="flex-right">
          <div className="card-body">
            <p className="card-text">This is a bunch of defaalksdlfkj asdkjflk wijib skjdkjgs q a dija wlekjs skdjlkja sdfjiv s. sdjgksj als.s djlsjlg a.</p>
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
      <h3 class="project-page">Reflection</h3>
      <p className="card-text">This is a bunch of defaalksdlfkj asdkjflk wijib skjdkjgs q a dija wlekjs skdjlkja sdfjiv s. sdjgksj als.s djlsjlg a.</p>
      </>
    );
  }
}


export default ProjectPage;