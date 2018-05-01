import React from "react";
import Typist from "react-typist";
import Highlight from "react-highlight";
import { Fade, Zoom, Flip } from "react-reveal";
import { Grid, Row, Col } from "react-flexbox-grid";
import Ionicon from "react-ionicons";
import ProjectItem from "./ProjectItem";
import GithubCorner from "react-github-corner";

class Projects extends React.Component {
  state = {};

  handleRoute = route => {
    this.props.history.push(route);
  };

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <React.Fragment>
        <GithubCorner
          className="corner"
          href="https://github.com/nvincenthill/portfolio"
          octoColor="#222831"
          bannerColor="#EEEEEE"
        />
        <Row
          className={this.state.hidden ? "title_container" : "title_container"}
        >
          <Col xs={12} sm={12} md={12} lg={12}>
            <div>
              <Fade>
                <h1 className="about-title">
                  {" "}
                  Projects{" "}
                  <a>
                    <Ionicon
                      icon="md-arrow-round-back"
                      color="#222831"
                      fontSize="1em"
                      beat={false}
                      onClick={() => this.handleRoute("/")}
                    />
                  </a>
                </h1>
              </Fade>
            </div>
          </Col>
        </Row>
        <Fade cascade>
          <Row>
            <Col xs={12} sm={12} md={6} lg={4}>
              <ProjectItem />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <ProjectItem />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <ProjectItem />
            </Col>
          </Row>
        </Fade>
      </React.Fragment>
    );
  }
}

export default Projects;
