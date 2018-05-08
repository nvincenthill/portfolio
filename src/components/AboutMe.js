import React from "react";
import "babel-polyfill";
import { Fade } from "react-reveal";
import { Row, Col } from "react-flexbox-grid";
// import HomeButton from "./HomeButton";
// import Footer from "./Footer";
import Header from "./Header";
import Ionicon from "react-ionicons";
import { Link } from "react-router-dom";

class AboutMe extends React.Component {
  state = {};

  changeColor = () => {};

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
                    I started my career at a hedge fund as a trader - I've
                    traded equities, options, commodities, credit,
                    morgage-backed securities, and other derivatives.
                  </p>
                  <p className="about-description">
                    <span className="about-hook">
                      {" "}
                      ... but it wasn't my passion.{" "}
                    </span>
                  </p>
                  <p className="about-description">
                    I'd love to work with you and add value to your firm.
                  </p>
                  <div className="about-contact">
                    <Link to="/Contact/">
                      <Ionicon
                        icon="ios-contact"
                        color="#222831"
                        fontSize="5em"
                        beat={false}
                        // onClick={() => this.handleRoute("/")}
                        className="about-contact-button"
                      />

                      <p className="about-contact"> Hire me! </p>
                    </Link>
                  </div>
                </div>
              </Fade>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default AboutMe;
