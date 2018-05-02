import React from "react";
import Typist from "react-typist";
import "babel-polyfill";
import Highlight from "react-highlight";
import { Fade, Zoom } from "react-reveal";
import { Grid, Row, Col } from "react-flexbox-grid";
import GithubCorner from "react-github-corner";
import HomeButton from "./HomeButton";


class AboutMe extends React.Component {
  state = {};

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const style = {
      color: "red",
      opacity: .5
    }
    return (
      <React.Fragment>
      <Row between="xs" middle="xs" className={"title_container"}>
        <Col xs={2} sm={2} md={2} lg={2}>
          <Fade>
            <HomeButton />
          </Fade>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8}>
          <Fade>
            <h1 className="title-name"> About Me </h1>
          </Fade>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2}>
        </Col>
      </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <div>
                <Fade>
                  <h2 className="about-tagline">
                    {" "}
                    I'm an aspiring software engineer with a background in
                    finance and securities trading.{" "}
                  </h2>
                  <p className="about-description">
                    I started my career at a hedge fund as a trader; I've traded
                    equities, options, commodities, credit, morgage-backed
                    securities, and other derivatives.
                  </p>
                  <p className="about-description">
                    <span style={style}> ... but I never really enjoyed it. </span>
                  </p>
                  <p className="about-description">
                    I've been coding for two years and am looking for a job as a
                    front end developer.
                  </p>
                </Fade>
              </div>
            </Col>
          </Row>
      </React.Fragment>
    );
  }
}

export default AboutMe;
