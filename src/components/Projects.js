import React from "react";
import Typist from "react-typist";
import Highlight from "react-highlight";
import { Fade, Zoom } from "react-reveal";
import { Grid, Row, Col } from "react-flexbox-grid";
import Ionicon from "react-ionicons";
import ProjectItem from "./ProjectItem";

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
      <Fade>
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
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <a><Ionicon icon="md-arrow-round-back" color="white" fontSize="10em" beat={false} onClick={() => this.handleRoute('/')}/></a>
          </Col>
        </Row>
      </Fade>
    );
  }
}

export default Projects;
