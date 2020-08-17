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
    return (
      <div className="flex-container">
        <p>Project</p>
      </div>
    );
  }
}

export default ProjectPage;