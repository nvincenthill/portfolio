import React from "react";
import { Fade, Zoom, Flip, Bounce } from "react-reveal";
import { Grid, Row, Col } from "react-flexbox-grid";
import Ionicon from "react-ionicons";
import GithubCorner from "react-github-corner";

class ProjectItem extends React.Component {
  state = {};

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <Fade>
        <div className="project">
          <a href={this.props.url}>
            <img
              className="project_image"
              src={this.props.imageSource}
              alt="Did not load"
            />
            <h2 className="project_title"> {this.props.name} </h2>
          </a>
          <h3 className="project_description">
            {this.props.description}
          </h3>
          <p className="project_tech">
            {this.props.builtWith}
          </p>
        </div>
      </Fade>
    );
  }
}

export default ProjectItem;
