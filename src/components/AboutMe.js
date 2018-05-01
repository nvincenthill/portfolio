import React from "react";
import Typist from "react-typist";
import "babel-polyfill";
import Highlight from "react-highlight";
import { Fade, Zoom } from "react-reveal";
import { Grid, Row, Col } from "react-flexbox-grid";
import GithubCorner from "react-github-corner";

class AboutMe extends React.Component {
  state = {};

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
            className={
              this.state.hidden ? "title_container" : "title_container"
            }
          >
            <Col xs={12} sm={12} md={12} lg={12}>
              <div>
                <Fade>
                  <h1 className="about-title"> About Me </h1>
                </Fade>
              </div>
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
                  <h2 className="about-tagline">
                    ... but I never really enjoyed it.
                  </h2>
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
