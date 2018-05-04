import React from "react";
import { Fade } from "react-reveal";
import { Row, Col } from "react-flexbox-grid";
import Ionicon from "react-ionicons";
import ProjectItem from "./ProjectItem";
import HomeButton from "./HomeButton";

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
        <Row between="xs" middle="xs" className={"title_container"}>
          <Col xs={2} sm={2} md={2} lg={2}>
            <Fade>
              <Ionicon
                icon="ios-folder"
                color="#EEEEEE"
                fontSize="3em"
                beat={false}
                // onClick={() => this.handleClick("Github")}
                className="home-button"
              />
            </Fade>
          </Col>
          <Col xs={6} sm={6} md={6} lg={8}>
            <Fade>
              <h1 className="title-name"> Projects </h1>
            </Fade>
          </Col>
          <Col xs={2} sm={2} md={2} lg={2}>
            <Fade>
              <HomeButton />
            </Fade>
          </Col>
        </Row>

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
