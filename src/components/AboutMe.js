import React from "react";
import "babel-polyfill";
import { Fade } from "react-reveal";
import { Row, Col } from "react-flexbox-grid";
import HomeButton from "./HomeButton";
import Footer from "./Footer";
import Header from "./Header";
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
      <Header title="About Me" icon="md-person" />

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
