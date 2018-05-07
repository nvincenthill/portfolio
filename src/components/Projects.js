import React from "react";
import { Fade } from "react-reveal";
import { Row, Col } from "react-flexbox-grid";
import Ionicon from "react-ionicons";
import ProjectItem from "./ProjectItem";
import HomeButton from "./HomeButton";
import Header from "./Header";

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
      <Header title="Projects" icon="ios-folder" />

        <Fade>
          <Row>
            <div className="project-array-container">
              <Col xs={12} sm={12} md={6} lg={4}>
                <ProjectItem
                  name="The Meal Panda"
                  imageSource="../images/missing.png"
                  description="Menu planner & grocery list generator"
                  builtWith="React | CSS | Firebase | Jest | Node.js"
                  url="https://mealpanda.herokuapp.com/"
                  github="https://github.com/nvincenthill/mealpanda"
                />
              </Col>
              <Col xs={12} sm={12} md={6} lg={4}>
                <ProjectItem
                  name="The Next Big Thing"
                  imageSource="../images/missing.png"
                  description="This project is coming soon!"
                  builtWith="MongoDB | Express | SASS | AngularJS | Node.js"
                  url="n/a"
                  github="n/a"
                />
              </Col>
              <Col xs={12} sm={12} md={6} lg={4}>
                <ProjectItem
                  name="My First Website"
                  imageSource="../images/missing.png"
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
