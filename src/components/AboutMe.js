import React from "react";
import "babel-polyfill";
import { Fade } from "react-reveal";
import { Row, Col } from "react-flexbox-grid";
import HomeButton from "./HomeButton";
import Footer from "./Footer";
import Ionicon from "react-ionicons";

class AboutMe extends React.Component {
  state = {};

  changeColor = () => {

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
                icon="md-person"
                color="#EEEEEE"
                fontSize="3em"
                beat={false}
                // onClick={() => this.changeColor()}
                className="home-button"
              />
            </Fade>
          </Col>
          <Col xs={6} sm={6} md={6} lg={8}>
            <Fade>
              <h1 className="title-name"> About Me </h1>
            </Fade>
          </Col>
          <Col xs={2} sm={2} md={2} lg={2}>
            <Fade>
              <HomeButton />
            </Fade>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div>
              <Fade cascade>
                <div>
                  <p className="about-description">
                    I started my career at a hedge fund as a trader - I've traded
                    equities, options, commodities, credit, morgage-backed
                    securities, and other derivatives.
                  </p>
                  <p className="about-description">
                    <span className="about-hook">
                      {" "}
                      ... but I never really enjoyed it.{" "}
                    </span>
                  </p>
                  <p className="about-description">
                    I've looking for my next opportunity to add value and build something awesome.
                  </p>
                </div>
              </Fade>
            </div>
          </Col>
        </Row>
        <Footer />
      </React.Fragment>
    );
  }
}

export default AboutMe;
