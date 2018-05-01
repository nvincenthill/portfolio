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
            <div className="project-array-container">
              <Col xs={12} sm={12} md={6} lg={4}>
                <ProjectItem
                  name="Meal Panda"
                  imageSource="../images/mealpanda.png"
                  description="Menu planner & grocery list generator"
                  builtWith="React | Firebase | Jest | Node.js"
                  url="https://mealpanda.herokuapp.com/"
                  github="https://github.com/nvincenthill/mealpanda"
                />
              </Col>
              <Col xs={12} sm={12} md={6} lg={4}>
                <ProjectItem
                  name="TBD#2"
                  imageSource="n/a"
                  description="This project is coming soon!"
                  builtWith="n/a"
                  url="n/a"
                  github="n/a"
                />
              </Col>
              <Col xs={12} sm={12} md={6} lg={4}>
                <ProjectItem
                  name="My First Website"
                  imageSource="n/a"
                  description="Legacy billboard site and first milestone on my coding journey"
                  builtWith="HTML5 | CSS | JS | p5.js"
                  url="https://nvincenthill.github.io/"
                  github="https://github.com/nvincenthill/nvincenthill.github.io"
                />
              </Col>
            </div>
          </Row>
        </Fade>
      </React.Fragment>
    );
  }
}

export default Projects;
