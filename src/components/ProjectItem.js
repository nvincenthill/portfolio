import React from "react";
import { Fade } from "react-reveal";
// import { Grid, Row, Col } from "react-flexbox-grid";
import Ionicon from "react-ionicons";

class ProjectItem extends React.Component {
  state = {
    isHovered: false
  };

  handleHover() {
    this.setState({
      isHovered: !this.state.isHovered
    });
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const btnClass = this.state.isHovered ? "pulse animated project-github-icon-hover" : "project-github-icon";

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
          <h3 className="project_description">{this.props.description}</h3>
          <p className="project_tech">{this.props.builtWith}</p>
          <div onMouseEnter={this.handleHover.bind(this)} onMouseLeave={this.handleHover.bind(this)}>
            <a href={this.props.github}>
              <Ionicon
                icon="logo-github"
                color={this.state.isHovered ? "#00adb5" : "#EEEEEE"}
                fontSize="4em"
                beat={false}
                // onClick={() => this.handleRoute("/")}
                className={btnClass}
              />
            </a>
          </div>
        </div>
      </Fade>
    );
  }
}

export default ProjectItem;
