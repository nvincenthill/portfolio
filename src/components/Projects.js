import React from "react";
import Typist from "react-typist";
import Highlight from "react-highlight";
import { Fade, Zoom, Flip } from "react-reveal";
import { Grid, Row, Col } from "react-flexbox-grid";
import Ionicon from "react-ionicons";
import ProjectItem from "./ProjectItem";
import HomeButton from "./HomeButton";
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
        <Row middle="xs" className={"title_container"}>
          <Col xs={2} sm={2} md={2} lg={2}>
            <Fade>
              <HomeButton />
            </Fade>
          </Col>
          <Col xs={8} sm={8} md={8} lg={8}>
            <Fade>
              <h1 className="title-name"> Projects </h1>
            </Fade>
          </Col>
          <Col xs={2} sm={2} md={2} lg={2} />
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
                  name="The Next Big Thing"
                  imageSource="../images/missing.png"
                  description="This project is coming soon!"
                  builtWith="n/a"
                  url="n/a"
                  github="n/a"
                />
              </Col>
              <Col xs={12} sm={12} md={6} lg={4}>
                <ProjectItem
                  name="My First Website"
                  imageSource="../images/myfirstwebsite.png"
                  description="Legacy billboard site and first milestone on my coding journey"
                  builtWith="HTML5 | CSS | JS | p5.js"
                  url="https://nvincenthill.github.io/"
                  github="https://github.com/nvincenthill/nvincenthill.github.io"
                />
              </Col>
              <Col xs={12} sm={12} md={6} lg={4}>
                <ProjectItem
                  name="The Next Big Thing"
                  imageSource="../images/missing.png"
                  description="This project is coming soon!"
                  builtWith="n/a"
                  url="n/a"
                  github="n/a"
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
